/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier216, Verifier216Interface } from "../Verifier216";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[23]",
        name: "input",
        type: "uint256[23]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ec6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a0c2a19a14610030575b600080fd5b61004361003e366004611bbb565b610059565b6040516100509190611c6b565b60405180910390f35b60006100636119af565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160178082526103008201909352600092909182016102e08036833701905050905060005b60178110156101615784816017811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061015981611e29565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc9190611ddb565b146101f25760405162461bcd60e51b81526004016101e990611c76565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e990611cce565b6102c9826102c485608001518460016102719190611ddb565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151611281565b6112ec565b9150806102d581611e29565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b60200260200101516112ec565b905061034a6103268660000151611353565b8660200151846000015185602001518587604001518b6040015189606001516113e8565b61035a5760019350505050610362565b600093505050505b92915050565b6103706119e1565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f139490710bd046d304aa125004a329237edcf069f54e1b8ee1d87998c3d942a78185019081527f052ff779e6faabf06994c7769252970e1bd0147994003efc12f23b7b6cd41188828401528152835180850185527f10967562ec8b7fe7deb15e68a8be26137a4a710a2fafbcc56b985566eb9950ae81527f057c13b168563ed71e1ff3d2a7ef47bde6451e48e51f136dc5d0f4862757e028818501528184015290840152815160188082526103208201909352919082015b6105f4611a28565b8152602001906001900390816105ec57505060808201908152604080518082019091527f094d1edb2799e9c3a1c12fe69ea72553b322a25a07c72b336b050de2cea6f62581527f109366f0654c5077674eaa120eed9649b059ec4fa3e7e44013c0e1feda5a4db160208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2744af1ff5b8166beae0ec3bf2926687c737658bec56f79674218c0bf57d146281526020017f035b42d30b86ba394eff35baec603eefe1b2b30cf2036aeb4a8372ea0e59e92a815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f28643a25bc240c1c375bcd786b6fd3a5723d2fe4b76acb9c6db4df3b07cbb48281526020017f114a17745262d6c66179967879294875d6af5f414c13c6d5f20e0e53321c9621815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0273d43f9afe593c66d354f6fd7aa04e3940ef72766df06619142b5c83fe9cf081526020017f046bb4a44a97fc60093fe18cd2bcf673c383d86a9392e33193f146b8cfb5fa92815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2ab8672dce028c18a883e93d82771f205721e5027615580d35c8750aab90afce81526020017f20b962b5275edbafda1a2f04b1b4bd1fab4e51bba3e9f36af65c6a7bf258fed9815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1db155b057f8d10e05faffb16b013f99a9cabfe33be05aa53ffb9600e8c2610b81526020017f2d3e2ef0183b2bd60346f1582388760cf858fe98bc5ec8239e9b852ce92bb377815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1fbbe30ed42a1341d729d145e16635ce66c18ad42200ebe8b6dfe9b25194548b81526020017f02bdd6205ed7fb577b929e8e023e054d8325c8a9f5a3c6fae536844f46f14178815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f05f1c1143a912c16e86b94857d47f4f634cd4670ac72fc543e1ca14e4b00d6fc81526020017f0e0c4e3d64d99e8411649cd4d01d7873d8ecd81c8adadef9fcba31317a5818fd8152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0a28af897fdd84cb270e00ea7fbc367b2159fb393b2d787b6ab98f24824841fb81526020017f035e6633caca784e34af78f44d280d9b57640bbb7da09b8d8e8597a28b36c2448152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0757fa0fd96081fe60c70ad7b28ddb92ddb8cfb98c54c3f24f2387e2e3e2f6bb81526020017f17e557024825aeaf78e25579089a7a082e135bc2c2cb18a0e2f894ed8bf06a668152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807eeb7a8cad385000479629f7faf1b3c584987fb0ae86126e908639f81007670c81526020017f27672c7c2e1868fc773bc8a41ad3b8cf6def92a2edb14bd89efcd1c72ba977018152508160800151600a81518110610bb257634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2a8195b06a9660f78c95e003c21437a83152cf2634262d12139636abed79a44f81526020017f249509e1d63fd1462b7fb1d4a838a62b74a9a36c6605439294619fbbbbcc183f8152508160800151600b81518110610c3757634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f02ccc5dc406d03ebe5520a41aa9f4e1ecad1960b35fe6200b8b5b590adee8b2f81526020017f28194dfa11124b06304fe6bf906d2cff34c315be1f1b808b8aaec80e287991398152508160800151600c81518110610cbc57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f06fc095255e251ca2158f0d42c4e08be46b29cb3da323e324aa37a4259a4bd5381526020017f039600998cc1df2209fbc5cc61c0c6e1f38df34c84c323fc5f7ed1c6e04ac23a8152508160800151600d81518110610d4157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f274e71e4428e2176594c73d39beb87cd4389c9fe1276bf96f58d4fd058e299dd81526020017f1bb51d170d2dd2b2a9d79df2665ca9e5316a9b62782fafdf36605705447bcb548152508160800151600e81518110610dc657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0e46f9e74fea8c607d8392120ed59f09ecd8ca53f4e26bb5d5b4d064d7b0084681526020017f17daa44b5698a6dfc6dc421ba31f713631a3f0b5a79135b23b8eef264d6535118152508160800151600f81518110610e4b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1df82197915d2a344e69b8257e125514f3541fee1cb5bacbbe8b656b1dfdaab381526020017f05d7b782b8b319b89387808ee27e1f37f560e1511c33484bddb82b53ff4bf68b8152508160800151601081518110610ed057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0e1f35c1c7f04621f99a3ae5ff2d1bbf2915cf6dba69748d262bed1c8b7b69c081526020017f268b92761fb1b7bad79e44e366d4f289481777efb65ea58ac4ae3e5896af2c408152508160800151601181518110610f5557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2ddfe6d596f02f0f6368519fa0758264e9a6f2639bede0bbf852b1fd86de54d281526020017f01292674543c7b4756ea9d9748274a73fa4e280256435d59df9ac666f0eb3c9b8152508160800151601281518110610fda57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f10685b35051c93d9aa99057a6d86ded57589ab55c4ee40a27898323750ef2b4081526020017f1ca7c8fc527b4a77b1f231b934c67aa0ed939ccf1652bad4ab933c8a1360ca24815250816080015160138151811061105f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f20082d13892777876a5479851d83f718c165d8c3199842e9165f9302a5f0f93a81526020017f1b3393aa1a371aeae8fe95b8cfede5ab043949991d693b35ab88a1ec989e757481525081608001516014815181106110e457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2ff5d264743f842da9abeb6581b7e998b5f4a18c7fd2bca01b656e0bf23a401781526020017f02e09e8cd1440d94607336012be426f70f7910eef29bfd21e2232485ba679c4d815250816080015160158151811061116957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f07c67160bb853a5d824ffb3451bf18b572f52e5b7382efcda91689727597d13981526020017f2ba1b4dda7ab8d7e33aed235a86d1f46e9aa014481d8308c0f1c33c526b81cb981525081608001516016815181106111ee57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f210475f75db7cab0576895232a12ec3a1905046cc5d75c26794d88b43a3036f081526020017f2904f25ea7bc526f4c454d4f2c2bbab86102455bb0199e9a3280efecc401a445815250816080015160178151811061127357634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b611289611a28565b611291611a42565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080156112c4576112c6565bfe5b50806112e45760405162461bcd60e51b81526004016101e990611ca2565b505092915050565b6112f4611a28565b6112fc611a60565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156112c45750806112e45760405162461bcd60e51b81526004016101e990611d35565b61135b611a28565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561138e57506020830151155b156113ae57505060408051808201909152600080825260208201526113e3565b6040518060400160405280846000015181526020018285602001516113d39190611e44565b6113dd9084611e12565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b61140b611a28565b81526020019060019003908161140357505060408051600480825260a0820190925291925060009190602082015b611441611a7e565b8152602001906001900390816114395790505090508a8260008151811061147857634e487b7160e01b600052603260045260246000fd5b602002602001018190525088826001815181106114a557634e487b7160e01b600052603260045260246000fd5b602002602001018190525086826002815181106114d257634e487b7160e01b600052603260045260246000fd5b602002602001018190525084826003815181106114ff57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250898160008151811061152c57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250878160018151811061155957634e487b7160e01b600052603260045260246000fd5b6020026020010181905250858160028151811061158657634e487b7160e01b600052603260045260246000fd5b602002602001018190525083816003815181106115b357634e487b7160e01b600052603260045260246000fd5b60200260200101819052506115c882826115d7565b9b9a5050505050505050505050565b600081518351146115fa5760405162461bcd60e51b81526004016101e990611d05565b82516000611609826006611df3565b905060008167ffffffffffffffff81111561163457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561165d578160200160208202803683370190505b50905060005b8381101561195c5786818151811061168b57634e487b7160e01b600052603260045260246000fd5b602002602001015160000151828260066116a59190611df3565b6116b0906000611ddb565b815181106116ce57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508681815181106116fa57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066117149190611df3565b61171f906001611ddb565b8151811061173d57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061176957634e487b7160e01b600052603260045260246000fd5b6020908102919091010151515182611782836006611df3565b61178d906002611ddb565b815181106117ab57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106117d757634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826117f2836006611df3565b6117fd906003611ddb565b8151811061181b57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061184757634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061187357634e487b7160e01b600052603260045260246000fd5b602002015182611884836006611df3565b61188f906004611ddb565b815181106118ad57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106118d957634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160016002811061190557634e487b7160e01b600052603260045260246000fd5b602002015182611916836006611df3565b611921906005611ddb565b8151811061193f57634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061195481611e29565b915050611663565b50611965611a9e565b6000602082602086026020860160086107d05a03fa90508080156112c45750806119a15760405162461bcd60e51b81526004016101e990611d61565b505115159695505050505050565b60405180606001604052806119c2611a28565b81526020016119cf611a7e565b81526020016119dc611a28565b905290565b6040518060a001604052806119f4611a28565b8152602001611a01611a7e565b8152602001611a0e611a7e565b8152602001611a1b611a7e565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611a91611abc565b81526020016119dc611abc565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611aea578081fd5b6040516102e080820182811067ffffffffffffffff82111715611b0f57611b0f611e7a565b6040528184828101871015611b22578485fd5b8492505b6017831015611b4657803582526001929092019160209182019101611b26565b509195945050505050565b600082601f830112611b61578081fd5b6040516040810181811067ffffffffffffffff82111715611b8457611b84611e7a565b8060405250808385604086011115611b9a578384fd5b835b6002811015611b46578135835260209283019290910190600101611b9c565b6000806000806103e08587031215611bd1578384fd5b611bdb8686611b51565b9350604086605f870112611bed578384fd5b6002611c00611bfb82611dba565b611d90565b8083890160c08a018b811115611c14578889fd5b885b85811015611c3c57611c288d84611b51565b855260209094019391860191600101611c16565b50829850611c4a8c82611b51565b9750505050505050611c60866101008701611ada565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff81118282101715611db257611db2611e7a565b604052919050565b600067ffffffffffffffff821115611dd457611dd4611e7a565b5060200290565b60008219821115611dee57611dee611e64565b500190565b6000816000190483118215151615611e0d57611e0d611e64565b500290565b600082821015611e2457611e24611e64565b500390565b6000600019821415611e3d57611e3d611e64565b5060010190565b600082611e5f57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e634ec715822e6acd3198ecdbe5a3d8227ce6639ef454a923e57bd4f8653f9ad64736f6c63430008000033";

export class Verifier216__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier216> {
    return super.deploy(overrides || {}) as Promise<Verifier216>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier216 {
    return super.attach(address) as Verifier216;
  }
  connect(signer: Signer): Verifier216__factory {
    return super.connect(signer) as Verifier216__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier216Interface {
    return new utils.Interface(_abi) as Verifier216Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier216 {
    return new Contract(address, _abi, signerOrProvider) as Verifier216;
  }
}