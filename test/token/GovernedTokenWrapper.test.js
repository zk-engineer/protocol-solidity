const BN = require('bn.js');
const EIP712 = require('../helpers/EIP712');
const TruffleAssert = require('truffle-assertions');
const Ethers = require('ethers');

const helpers = require('../helpers');
const {
  address,
  encodeParameters,
  etherUnsigned
} = helpers;
const assert = require('assert');
const { network, ethers } = require('hardhat');
const CompToken = artifacts.require('CompToken');
const TimelockHarness = artifacts.require('TimelockHarness');
const GovernorBravoImmutable = artifacts.require('GovernorBravoImmutable');
const GovernedTokenWrapper = artifacts.require('GovernedTokenWrapper');

const path = require('path');
const solparse = require('solparse');

const governorBravoPath = path.join(__dirname, '../../', 'contracts', 'governance/GovernorBravoInterfaces.sol');
const statesInverted = solparse
  .parseFile(governorBravoPath)
  .body
  .find(k => k.name === 'GovernorBravoDelegateStorageV1')
  .body
  .find(k => k.name == 'ProposalState')
  .members

const states = Object.entries(statesInverted).reduce((obj, [key, value]) => ({ ...obj, [value]: key }), {});

contract('GovernedTokenWrapper', (accounts) => {
  const name = 'Webb';
  const symbol = 'WEBB';
  let gov, root, acct;
  let targets, values, signatures, callDatas;

  beforeEach(async () => {
    root = accounts[0];
    acct = accounts[1];
    acc = accounts.slice(2);
    chainId = 31337; // await web3.eth.net.getId(); See: https://github.com/trufflesuite/ganache-core/issues/515
    comp = await CompToken.new(name, symbol);
    delay = etherUnsigned(2 * 24 * 60 * 60).multipliedBy(2)
    timelock = await TimelockHarness.new(root, delay);

    gov = await GovernorBravoImmutable.new(timelock.address, comp.address, root, 10, 1, "100000000000000000000000");
    await gov._initiate();
    await timelock.harnessSetAdmin(gov.address);

    await comp.mint(root, '10000000000000000000000000');
    await comp.delegate(root);
  });

  it('should instantiate the contracts', async () => {
    const wrapper = await GovernedTokenWrapper.new(name, symbol, gov.address);
    assert.strictEqual((await wrapper.name()), name);
    assert.strictEqual((await wrapper.symbol()), symbol);
    assert.strictEqual((await wrapper.governor()), gov.address);
  });

  it('should not allow adding a token from a non-governor', async () => {
    const wrapper = await GovernedTokenWrapper.new(name, symbol, gov.address);
    await TruffleAssert.reverts(
      wrapper.add(address(0), { from: accounts[0] }),
      'Only governor can call this function',
    );
  });

  it('should allow adding a token as governor', async () => {
    const wrapper = await GovernedTokenWrapper.new(name, symbol, timelock.address);
    const token = await CompToken.new('Token', 'TKN');
    targets = [wrapper.address];
    values = ['0'];
    signatures = ["add(address)"];
    callDatas = [encodeParameters(['address'], [token.address])];
    await gov.propose(targets, values, signatures, callDatas, 'do nothing');
    await network.provider.send("evm_mine")

    proposalId = await gov.latestProposalIds(root);
    await gov.castVote(proposalId, 1, { from: root });
    for (let i = 0; i < 10; i++) {
      await network.provider.send("evm_mine")
    }

    const prop = await gov.proposals(proposalId);
    let state = await gov.state(proposalId);
    assert.strictEqual(state.toString(), states['Succeeded']);

    await gov.queue(proposalId);
    state = await gov.state(proposalId);
    assert.strictEqual(state.toString(), states['Queued']);

    await network.provider.send("evm_increaseTime", [2 * 2 * 24 * 60 * 60])
    await network.provider.send("evm_mine")

    let res = await wrapper.getTokens();
    assert.strictEqual(res.length, 0);

    await gov.execute(proposalId);
    state = await gov.state(proposalId);
    assert.strictEqual(state.toString(), states['Executed']);
    assert.strictEqual((await wrapper.getTokens())[0], token.address);
  });
});
