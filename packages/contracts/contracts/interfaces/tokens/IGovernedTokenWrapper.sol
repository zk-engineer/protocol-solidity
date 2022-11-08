/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later-only
 */

pragma solidity ^0.8.0;

/**
    @title Interface for Token Wrapper contract.
    @author Webb Technologies.
 */
interface IGovernedTokenWrapper {
    /**
        @notice Adds a token at `_tokenAddress` to the GovernedTokenWrapper's wrapping list
        @param _tokenAddress The address of the token to be added
        @param _nonce The nonce tracking updates to this contract
        @notice Only the governor can call this function
     */
    function add(address _tokenAddress, uint32 _nonce) external;

    /**
        @notice Removes a token at `_tokenAddress` from the GovernedTokenWrapper's wrapping list
        @param _tokenAddress The address of the token to be removed
        @param _nonce The nonce tracking updates to this contract
        @notice Only the governor can call this function
     */
    function remove(address _tokenAddress, uint32 _nonce) external;

    /**
        @notice Sets a new `_feePercentage` for the GovernedTokenWrapper
        @param _feePercentage The new fee percentage
        @param _nonce The nonce tracking updates to this contract
        @notice Only the governor can call this function
     */
    function setFee(uint16 _feePercentage, uint32 _nonce) external;

    /**
        @notice Sets a new `_feeRecipient` for the GovernedTokenWrapper
        @param _feeRecipient The new fee recipient
        @param _nonce The nonce tracking updates to this contract
        @notice Only the governor can call this function
     */
    function setFeeRecipient(address payable _feeRecipient, uint32 _nonce) external;
}