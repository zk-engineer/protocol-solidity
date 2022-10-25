/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, BigNumberish, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { SignatureBridge, SignatureBridgeInterface } from '../SignatureBridge';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialGovernor',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'GovernanceOwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recovered',
        type: 'address',
      },
    ],
    name: 'RecoveredAddress',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'EVM_CHAIN_ID_TYPE',
    outputs: [
      {
        internalType: 'bytes2',
        name: '',
        type: 'bytes2',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: '_resourceIDToHandlerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
      {
        internalType: 'bytes4',
        name: 'functionSig',
        type: 'bytes4',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'newResourceID',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'handlerAddress',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'adminSetResourceWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'averageSessionLengthInMillisecs',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentVotingPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'executeProposalWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainIdType',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governor',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
    ],
    name: 'isCorrectExecutionChain',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'resourceId',
        type: 'bytes32',
      },
    ],
    name: 'isCorrectExecutionContext',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isGovernor',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'isSignatureFromGovernor',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastGovernorUpdateTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numOfProposers',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_resourceId',
        type: 'bytes32',
      },
    ],
    name: 'parseChainIdFromResourceId',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposalNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposerSetRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposerSetUpdateNonce',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'recover',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'refreshNonce',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sessionLengthMultiplier',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'publicKey',
        type: 'bytes',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'transferOwnershipWithSignaturePubKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_proposerSetRoot',
        type: 'bytes32',
      },
      {
        internalType: 'uint64',
        name: '_averageSessionLengthInMillisecs',
        type: 'uint64',
      },
      {
        internalType: 'uint32',
        name: '_numOfProposers',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_proposerSetUpdateNonce',
        type: 'uint32',
      },
      {
        internalType: 'bytes',
        name: '_sig',
        type: 'bytes',
      },
    ],
    name: 'updateProposerSetData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'leafIndex',
            type: 'uint32',
          },
          {
            internalType: 'bytes32[]',
            name: 'siblingPathNodes',
            type: 'bytes32[]',
          },
          {
            internalType: 'address',
            name: 'proposedGovernor',
            type: 'address',
          },
        ],
        internalType: 'struct Governable.Vote',
        name: 'vote',
        type: 'tuple',
      },
    ],
    name: 'voteInFavorForceSetGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405260008054600160a81b600160e81b0319168155600280546001600160401b0319166001600160401b03178155600355600581905560095534801561004757600080fd5b506040516200206c3803806200206c833981016040819052610068916100e6565b600080546001600160c81b0319166101006001600160a01b03858116820263ffffffff60a81b191692909217600160a81b63ffffffff86160217808455426008556040518694869493909204909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a350505050610135565b600080604083850312156100f957600080fd5b82516001600160a01b038116811461011057600080fd5b602084015190925063ffffffff8116811461012a57600080fd5b809150509250929050565b611f2780620001456000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80638755bcad116100f9578063bdfadc8411610097578063c7af335211610071578063c7af3352146103e8578063cc3c74a114610400578063f3d23d5414610409578063f5fc3d6b1461041c57600080fd5b8063bdfadc84146103bd578063c2230d6e146103c6578063c5eb6b1f146103df57600080fd5b80639d2b1ed7116100d35780639d2b1ed71461037e5780639e09583c14610391578063a6e94c911461039a578063bac163a2146103ad57600080fd5b80638755bcad146103305780638b7e878214610343578063935967001461036757600080fd5b80634c830cbd11610166578063715018a611610140578063715018a6146102d95780637296b5d8146102e1578063830b2f57146102f457806384db809f1461030757600080fd5b80634c830cbd146102905780635c975abb146102af5780636245e561146102c657600080fd5b80631ed13d1b116101a25780631ed13d1b1461024f57806324118804146102625780633408e470146102775780633a049e021461028757600080fd5b8063016737bb146101c95780630c340a24146101f957806313cb01f914610223575b600080fd5b6002546101dc906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020016101f0565b60005461023a90600160a81b900463ffffffff1681565b60405163ffffffff90911681526020016101f0565b61020b61025d36600461197f565b61043b565b610275610270366004611a3e565b61045b565b005b465b6040519081526020016101f0565b61027960055481565b610298610634565b60405165ffffffffffff90911681526020016101f0565b60005460ff165b60405190151581526020016101f0565b6102756102d43660046117d9565b610682565b610275610b26565b6102756102ef3660046119e2565b610ba4565b6102b66103023660046117c0565b610cf4565b61020b6103153660046117c0565b600a602052600090815260409020546001600160a01b031681565b6102b661033e36600461197f565b610d18565b61034e600160f81b81565b6040516001600160f01b031990911681526020016101f0565b60005461023a90600160c81b900463ffffffff1681565b61027561038c3660046118ec565b610d4c565b61027960085481565b6102756103a8366004611764565b610f22565b60045461023a9063ffffffff1681565b61027960035481565b6101dc6103d43660046117c0565b65ffffffffffff1690565b61027960015481565b60005461010090046001600160a01b031633146102b6565b61027960095481565b610275610417366004611868565b610f81565b6102b661042a3660046117c0565b60301c6001600160a01b0316301490565b81516020830120600090816104508285611144565b925050505b92915050565b600254610474906103e8906001600160401b0316611d97565b6001600160401b031660035461048a9190611db1565b6008546104979190611d34565b4210156104e35760405162461bcd60e51b8152602060048201526015602482015274496e76616c69642074696d6520666f7220766f746560581b60448201526064015b60405180910390fd5b6020810151815133916104f7918390611168565b61053a5760405162461bcd60e51b815260206004820152601460248201527334b73b30b634b21036b2b935b63290383937b7b360611b60448201526064016104da565b60055460009081526006602090815260408083206001600160a01b038516845290915290205460ff16156105a05760405162461bcd60e51b815260206004820152600d60248201526c185b1c9958591e481d9bdd1959609a1b60448201526064016104da565b6005805460009081526006602090815260408083206001600160a01b038087168552908352818420805460ff1916600190811790915594548452600783528184208783015190911684529091528120805490919061060590849063ffffffff16611d4c565b92506101000a81548163ffffffff021916908363ffffffff16021790555061063082604001516112a0565b5050565b60408051600160f81b602082018190524660e01b6001600160e01b0319811660228401528351808403600601815260269093019093526000929161067781611dee565b60d01c935050505090565b60408051602081018890526001600160e01b03198781168284015260e087901b16604482015260488101859052606084901b6bffffffffffffffffffffffff191660688201528151605c818303018152607c909101909152816106e58282610d18565b6107015760405162461bcd60e51b81526004016104da90611c06565b60405163830b2f5760e01b815260048101899052309063830b2f579060240160206040518083038186803b15801561073857600080fd5b505afa15801561074c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107709190611797565b61078c5760405162461bcd60e51b81526004016104da90611c55565b60405163830b2f5760e01b815260048101869052309063830b2f579060240160206040518083038186803b1580156107c357600080fd5b505afa1580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190611797565b6108175760405162461bcd60e51b81526004016104da90611c55565b60405163f5fc3d6b60e01b815260048101899052309063f5fc3d6b9060240160206040518083038186803b15801561084e57600080fd5b505afa158015610862573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108869190611797565b6108f85760405162461bcd60e51b815260206004820152603860248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201527f6e76616c696420657865637574696f6e20636f6e74657874000000000000000060648201526084016104da565b8563ffffffff16600954106109645760405162461bcd60e51b815260206004820152602c60248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201526b6e76616c6964206e6f6e636560a01b60648201526084016104da565b60095461097390610418611d34565b8663ffffffff16106109fc5760405162461bcd60e51b815260206004820152604660248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204e60448201527f6f6e6365206d757374206e6f7420696e6372656d656e74206d6f7265207468616064820152650dc40626068760d31b608482015260a4016104da565b6001600160e01b03198716636245e56160e01b14610a825760405162461bcd60e51b815260206004820152603960248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201527f6e76616c69642066756e6374696f6e207369676e61747572650000000000000060648201526084016104da565b6000858152600a60205260409081902080546001600160a01b0319166001600160a01b038781169182179092559151635c7d1b9b60e11b815260048101889052603088901c909116602482018190528692909163b8fa373690604401600060405180830381600087803b158015610af857600080fd5b505af1158015610b0c573d6000803e3d6000fd5b50505063ffffffff90981660095550505050505050505050565b60005461010090046001600160a01b03163314610b555760405162461bcd60e51b81526004016104da90611bc0565b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b60005463ffffffff808416600160a81b9092041610610bf55760405162461bcd60e51b815260206004820152600d60248201526c496e76616c6964206e6f6e636560981b60448201526064016104da565b600054610c1090600160a81b900463ffffffff166001611d4c565b63ffffffff168263ffffffff161115610c6b5760405162461bcd60e51b815260206004820152601960248201527f4e6f6e6365206d75737420696e6372656d656e7420627920310000000000000060448201526064016104da565b825160208085019190912060405190918291610ca491610c8f918791899101611b36565b60405160208183030381529060405284610d18565b610cc05760405162461bcd60e51b81526004016104da90611bc0565b610cc9816112f7565b50506000805463ffffffff909316600160a81b0263ffffffff60a81b19909316929092179091555050565b600065ffffffffffff821680610d08610634565b65ffffffffffff16149392505050565b8151602083012060009081610d2d8285611144565b60005461010090046001600160a01b0390811691161495945050505050565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250849250610d90915083905082610d18565b610dac5760405162461bcd60e51b81526004016104da90611c06565b6000610dbb6020828789611d0a565b610dc491611dd0565b60405163830b2f5760e01b815260048101829052909150309063830b2f579060240160206040518083038186803b158015610dfe57600080fd5b505afa158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190611797565b610ea15760405162461bcd60e51b815260206004820152603660248201527f6578656375746550726f706f73616c576974685369676e61747572653a20457860448201527532b1baba34b7339037b7103bb937b7339031b430b4b760511b60648201526084016104da565b6000818152600a60205260409081902054905163712467f960e11b81526001600160a01b03909116908190819063e248cff290610ee69086908c908c90600401611b8a565b600060405180830381600087803b158015610f0057600080fd5b505af1158015610f14573d6000803e3d6000fd5b505050505050505050505050565b60005461010090046001600160a01b03163314610f515760405162461bcd60e51b81526004016104da90611bc0565b610f5a826112f7565b6000805463ffffffff909216600160a81b0263ffffffff60a81b1990921691909117905550565b60005463ffffffff808416600160c81b9092041610610fd25760405162461bcd60e51b815260206004820152600d60248201526c496e76616c6964206e6f6e636560981b60448201526064016104da565b600054610fee90600160c81b900463ffffffff16610418611d4c565b63ffffffff168263ffffffff16106110585760405162461bcd60e51b815260206004820152602760248201527f4e6f6e6365206d757374206e6f7420696e6372656d656e74206d6f72652074686044820152660c2dc40626068760cb1b60648201526084016104da565b60408051602081018790526001600160c01b031960c087901b16918101919091526001600160e01b031960e085811b8216604884015284901b16604c8201526110b39060500160405160208183030381529060405282610d18565b6110cf5760405162461bcd60e51b81526004016104da90611bc0565b60018590556002805467ffffffffffffffff19166001600160401b0386161790556004805463ffffffff191663ffffffff858116919091179091556000805463ffffffff60c81b1916600160c81b92851692909202919091178155600580549161113883611e25565b91905055505050505050565b600080600061115385856113d7565b915091506111608161141d565b509392505050565b6040516bffffffffffffffffffffffff19606084901b166020820152600090819060340160408051601f1981840301815291905280516020909101209050808360005b87518160ff161015611291576111c2600283611e60565b63ffffffff166112215782888260ff16815181106111e2576111e2611ec5565b6020026020010151604051602001611204929190918252602082015260400190565b604051602081830303815290604052805190602001209250611272565b878160ff168151811061123657611236611ec5565b602002602001015183604051602001611259929190918252602082015260400190565b6040516020818303038152906040528051906020012092505b61127d600283611d74565b91508061128981611e40565b9150506111ab565b50506001541495945050505050565b6004546112b59060029063ffffffff16611d74565b60055460009081526007602090815260408083206001600160a01b038616845290915290205463ffffffff918216911611156112f4576112f4816112f7565b50565b6001600160a01b03811661135f5760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b60648201526084016104da565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a360008054610100600160a81b0319166101006001600160a01b038416021781554260085560058054916113cf83611e25565b919050555050565b60008082516041141561140e5760208301516040840151606085015160001a611402878285856115d8565b94509450505050611416565b506000905060025b9250929050565b600081600481111561143157611431611eaf565b141561143a5750565b600181600481111561144e5761144e611eaf565b141561149c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104da565b60028160048111156114b0576114b0611eaf565b14156114fe5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104da565b600381600481111561151257611512611eaf565b141561156b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104da565b600481600481111561157f5761157f611eaf565b14156112f45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104da565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561160f57506000905060036116bc565b8460ff16601b1415801561162757508460ff16601c14155b1561163857506000905060046116bc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561168c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116b5576000600192509250506116bc565b9150600090505b94509492505050565b80356001600160a01b03811681146116dc57600080fd5b919050565b600082601f8301126116f257600080fd5b81356001600160401b0381111561170b5761170b611edb565b61171e601f8201601f1916602001611cda565b81815284602083860101111561173357600080fd5b816020850160208301376000918101602001919091529392505050565b803563ffffffff811681146116dc57600080fd5b6000806040838503121561177757600080fd5b611780836116c5565b915061178e60208401611750565b90509250929050565b6000602082840312156117a957600080fd5b815180151581146117b957600080fd5b9392505050565b6000602082840312156117d257600080fd5b5035919050565b60008060008060008060c087890312156117f257600080fd5b8635955060208701356001600160e01b03198116811461181157600080fd5b945061181f60408801611750565b935060608701359250611834608088016116c5565b915060a08701356001600160401b0381111561184f57600080fd5b61185b89828a016116e1565b9150509295509295509295565b600080600080600060a0868803121561188057600080fd5b8535945060208601356001600160401b03808216821461189f57600080fd5b8195506118ae60408901611750565b94506118bc60608901611750565b935060808801359150808211156118d257600080fd5b506118df888289016116e1565b9150509295509295909350565b60008060006040848603121561190157600080fd5b83356001600160401b038082111561191857600080fd5b818601915086601f83011261192c57600080fd5b81358181111561193b57600080fd5b87602082850101111561194d57600080fd5b60209283019550935090850135908082111561196857600080fd5b50611975868287016116e1565b9150509250925092565b6000806040838503121561199257600080fd5b82356001600160401b03808211156119a957600080fd5b6119b5868387016116e1565b935060208501359150808211156119cb57600080fd5b506119d8858286016116e1565b9150509250929050565b6000806000606084860312156119f757600080fd5b83356001600160401b0380821115611a0e57600080fd5b611a1a878388016116e1565b9450611a2860208701611750565b9350604086013591508082111561196857600080fd5b60006020808385031215611a5157600080fd5b82356001600160401b0380821115611a6857600080fd5b9084019060608287031215611a7c57600080fd5b611a84611cb2565b611a8d83611750565b81528383013582811115611aa057600080fd5b8301601f81018813611ab157600080fd5b803583811115611ac357611ac3611edb565b8060051b9350611ad4868501611cda565b8181528681019083880186850189018c1015611aef57600080fd5b600096505b83871015611b12578035835260019690960195918801918801611af4565b508488015250611b27915050604084016116c5565b60408201529695505050505050565b63ffffffff60e01b8360e01b1681526000825160005b81811015611b695760208186018101516004868401015201611b4c565b81811115611b7b576000600483860101525b50919091016004019392505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b60208082526037908201527f61646d696e5365745265736f75726365576974685369676e61747572653a204560408201527f7865637574696e67206f6e2077726f6e6720636861696e000000000000000000606082015260800190565b604051606081016001600160401b0381118282101715611cd457611cd4611edb565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611d0257611d02611edb565b604052919050565b60008085851115611d1a57600080fd5b83861115611d2757600080fd5b5050820193919092039150565b60008219821115611d4757611d47611e83565b500190565b600063ffffffff808316818516808303821115611d6b57611d6b611e83565b01949350505050565b600063ffffffff80841680611d8b57611d8b611e99565b92169190910492915050565b60006001600160401b0380841680611d8b57611d8b611e99565b6000816000190483118215151615611dcb57611dcb611e83565b500290565b8035602083101561045557600019602084900360031b1b1692915050565b805160208201516001600160d01b03198082169291906006831015611e1d5780818460060360031b1b83161693505b505050919050565b6000600019821415611e3957611e39611e83565b5060010190565b600060ff821660ff811415611e5757611e57611e83565b60010192915050565b600063ffffffff80841680611e7757611e77611e99565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122017958c12d08e9b6fe78863d2c6e41a278db4f5c14aa2b17475b1093046d6206c64736f6c63430008050033';

export class SignatureBridge__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    initialGovernor: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBridge> {
    return super.deploy(initialGovernor, nonce, overrides || {}) as Promise<SignatureBridge>;
  }
  getDeployTransaction(
    initialGovernor: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialGovernor, nonce, overrides || {});
  }
  attach(address: string): SignatureBridge {
    return super.attach(address) as SignatureBridge;
  }
  connect(signer: Signer): SignatureBridge__factory {
    return super.connect(signer) as SignatureBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureBridgeInterface {
    return new utils.Interface(_abi) as SignatureBridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SignatureBridge {
    return new Contract(address, _abi, signerOrProvider) as SignatureBridge;
  }
}
