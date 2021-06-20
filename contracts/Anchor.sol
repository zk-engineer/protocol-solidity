/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: LGPL-3.0-only
 */

pragma solidity ^0.8.0;

import "./MerkleTreeWithHistory.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IVerifier {
  function verifyProof(bytes memory _proof, uint256[6] memory _input) external returns (bool);
}

abstract contract Anchor is MerkleTreeWithHistory, ReentrancyGuard {
  address public bridge;

  IVerifier public immutable verifier;
  uint256 public immutable denomination;

  struct Edge {
    uint8 chainID;
    bytes32 root;
    uint256 height;
  }

  // maps anchor resource IDs to the index in the edge list
  mapping(bytes32 => uint256) public edgeIndex;
  mapping(uint8 => bool) public edgeExistsForChain;
  Edge[] public edgeList;

  // map to store used nullifier hashes
  mapping(bytes32 => bool) public nullifierHashes;
  // map to store all commitments to prevent accidental deposits with the same commitment
  mapping(bytes32 => bool) public commitments;

  // currency events
  event Deposit(bytes32 indexed commitment, uint32 leafIndex, uint256 timestamp);
  event Withdrawal(address to, bytes32 nullifierHash, address indexed relayer, uint256 fee);
  // bridge events
  event EdgeAddition(uint8 chainID, bytes32 destResourceID, uint256 height, bytes32 merkleRoot);
  event EdgeUpdate(uint8 chainID, bytes32 destResourceID, uint256 height, bytes32 merkleRoot);
  

  /**
    @dev The constructor
    @param _verifier the address of SNARK verifier for this contract
    @param _hasher the address of hash contract
    @param _denomination transfer amount for each deposit
    @param _merkleTreeHeight the height of deposits' Merkle Tree
  */
  constructor(
    IVerifier _verifier,
    IHasher _hasher,
    uint256 _denomination,
    uint32 _merkleTreeHeight
  ) MerkleTreeWithHistory(_merkleTreeHeight, _hasher) {
    require(_denomination > 0, "denomination should be greater than 0");
    verifier = _verifier;
    denomination = _denomination;
  }

  /**
    @dev Deposit funds into the contract. The caller must send (for ETH) or approve (for ERC20) value equal to or `denomination` of this instance.
    @param _commitment the note commitment, which is PedersenHash(nullifier + secret)
  */
  function deposit(bytes32 _commitment) external payable nonReentrant {
    require(!commitments[_commitment], "The commitment has been submitted");

    uint32 insertedIndex = _insert(_commitment);
    commitments[_commitment] = true;
    _processDeposit();

    emit Deposit(_commitment, insertedIndex, block.timestamp);
  }

  /** @dev this function is defined in a child contract */
  function _processDeposit() internal virtual;

  /**
    @dev Withdraw a deposit from the contract. `proof` is a zkSNARK proof data, and input is an array of circuit public inputs
    `input` array consists of:
      - merkle root of all deposits in the contract
      - hash of unique deposit nullifier to prevent double spends
      - the recipient of funds
      - optional fee that goes to the transaction sender (usually a relay)
  */
  function withdraw(
    bytes calldata _proof,
    bytes32 _root,
    bytes32 _nullifierHash,
    address payable _recipient,
    address payable _relayer,
    uint256 _fee,
    uint256 _refund
  ) external payable nonReentrant {
    require(_fee <= denomination, "Fee exceeds transfer value");
    require(!nullifierHashes[_nullifierHash], "The note has been already spent");
    require(isKnownRoot(_root), "Cannot find your merkle root"); // Make sure to use a recent one
    address rec = address(_recipient);
    address rel = address(_relayer);
    require(
      verifier.verifyProof(
        _proof,
        [uint256(_root), uint256(_nullifierHash), uint256(uint160(rec)), uint256(uint160(rel)), _fee, _refund]
      ),
      "Invalid withdraw proof"
    );

    nullifierHashes[_nullifierHash] = true;
    _processWithdraw(_recipient, _relayer, _fee, _refund);
    emit Withdrawal(_recipient, _nullifierHash, _relayer, _fee);
  }

  function addEdge(
    uint8 toChainID,
    bytes32 destResourceID,
    bytes32 root,
    uint256 height
  ) onlyBridge external payable nonReentrant {
    edgeExistsForChain[toChainID] = true;
    uint index = edgeList.length;
    Edge memory edge = Edge({
      chainID: toChainID,
      root: root,
      height: height
    });
    edgeList.push(edge);
    edgeIndex[destResourceID] = index;
    emit EdgeAddition(toChainID, destResourceID, height, root);
  }

  function updateEdge(
    uint8 toChainID,
    bytes32 destResourceID,
    bytes32 root,
    uint256 height
  ) onlyBridge external payable nonReentrant {
    require(edgeExistsForChain[toChainID], "Chain must be integrated from the bridge before updates");
    require(edgeList[edgeIndex[destResourceID]].height < height, "New height must be greater");
    // update the edge in the edge list
    edgeList[edgeIndex[destResourceID]] = Edge({
      chainID: toChainID,
      root: root,
      height: height
    });
    emit EdgeUpdate(toChainID, destResourceID, height, root);
  }

  /** @dev this function is defined in a child contract */
  function _processWithdraw(
    address payable _recipient,
    address payable _relayer,
    uint256 _fee,
    uint256 _refund
  ) internal virtual;

  /** @dev whether a note is already spent */
  function isSpent(bytes32 _nullifierHash) public view returns (bool) {
    return nullifierHashes[_nullifierHash];
  }

  /** @dev whether an array of notes is already spent */
  function isSpentArray(bytes32[] calldata _nullifierHashes) external view returns (bool[] memory spent) {
    spent = new bool[](_nullifierHashes.length);
    for (uint256 i = 0; i < _nullifierHashes.length; i++) {
      if (isSpent(_nullifierHashes[i])) {
        spent[i] = true;
      }
    }
  }

  modifier onlyBridge()  {
    if (msg.sender == bridge) {
      _;
    }
  }
}