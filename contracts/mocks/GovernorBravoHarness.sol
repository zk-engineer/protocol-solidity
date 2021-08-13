// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";
import "../governance/GovernorBravoDelegate.sol";

contract GovernorBravoDelegateHarness is GovernorBravoDelegate {
    function initialize(
        address timelock_,
        address comp_,
        uint votingPeriod_,
        uint votingDelay_,
        uint proposalThreshold_
    ) override public {
        require(msg.sender == admin, "GovernorBravo::initialize: admin only");
        require(address(timelock) == address(0), "GovernorBravo::initialize: can only initialize once");

        timelock = TimelockInterface(timelock_);
        comp = CompInterface(comp_);
        votingPeriod = votingPeriod_;
        votingDelay = votingDelay_;
        proposalThreshold = proposalThreshold_;
    }

	// @notice Harness initiate the GovenorBravo contract
	// @dev This function bypasses the need to initiate the GovernorBravo contract from an existing GovernorAlpha for testing.
	// Actual use will only use the _initiate(address) function
    function _initiate() public {
        proposalCount = 1;
        initialProposalId = 1;
    }
}