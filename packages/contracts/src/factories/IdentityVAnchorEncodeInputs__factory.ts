/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { IdentityVAnchorEncodeInputs, IdentityVAnchorEncodeInputsInterface } from '../IdentityVAnchorEncodeInputs';

const _abi = [
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
        components: [
          {
            internalType: 'bytes',
            name: 'proof',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'identityRoots',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'vanchorRoots',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'inputNullifiers',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[2]',
            name: 'outputCommitments',
            type: 'bytes32[2]',
          },
          {
            internalType: 'uint256',
            name: 'publicAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'extDataHash',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IdentityVAnchorEncodeInputs.Proof',
        name: '_args',
        type: 'tuple',
      },
      {
        internalType: 'uint8',
        name: '_maxEdges',
        type: 'uint8',
      },
    ],
    name: '_encodeInputs16',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'proof',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'identityRoots',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'vanchorRoots',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'inputNullifiers',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[2]',
            name: 'outputCommitments',
            type: 'bytes32[2]',
          },
          {
            internalType: 'uint256',
            name: 'publicAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'extDataHash',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IdentityVAnchorEncodeInputs.Proof',
        name: '_args',
        type: 'tuple',
      },
      {
        internalType: 'uint8',
        name: '_maxEdges',
        type: 'uint8',
      },
    ],
    name: '_encodeInputs2',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
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
];

const _bytecode =
  '0x6139f461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c80633408e470146100665780634c830cbd146100795780638b7e878214610098578063993aefec146100bc578063b216078a146100dd575b600080fd5b6040514681526020015b60405180910390f35b6100816100f0565b60405165ffffffffffff9091168152602001610070565b6100a3600160f81b81565b6040516001600160f01b03199091168152602001610070565b6100cf6100ca366004613425565b61013e565b60405161007092919061381d565b6100cf6100eb366004613425565b610fd4565b60408051600160f81b602082018190524660e01b6001600160e01b031981166022840152835180840360060181526026909301909352600092916101338161395b565b60d01c935050505090565b606080600061014b6100f0565b65ffffffffffff1690506000610162856001613928565b60ff166001600160401b0381111561017c5761017c6139a8565b6040519080825280602002602001820160405280156101a5578160200160208202803683370190505b50905060608560ff166001141561030e576101be612dca565b600088602001518060200190518101906101d891906130de565b9050600089604001518060200190518101906101f491906130de565b905080600060200201518560008151811061021157610211613992565b602090810291909101015280600160200201518560018151811061023757610237613992565b6020908102919091018101919091528251845282810151908401526040830186905260a08a015160608085019190915260c08b015160808501528a0151805160009061028557610285613992565b602090810291909101015160a084015260608a0151805160019081106102ad576102ad613992565b60209081029190910181015160c085015260808b0180515160e0860152518101516101008501528151610120850152818101516101408501526040516102f591859101613537565b6040516020818303038152906040529350505050610fc9565b8560ff166002141561049157610322612de9565b6000886020015180602001905181019061033c919061313b565b905060008960400151806020019051810190610358919061313b565b905080600060200201518560008151811061037557610375613992565b602090810291909101015280600160200201518560018151811061039b5761039b613992565b60209081029190910101528060026020020151856002815181106103c1576103c1613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080840187905260a08b810151608086015260c08c0151908501528a0151805160009061041657610416613992565b602090810291909101015160c084015260608a01518051600190811061043e5761043e613992565b60209081029190910181015160e085015260808b0180515161010086015251810151610120850152815161014085015281810151610160850152604080830151610180860152516102f59185910161356c565b8560ff166003141561064f576104a5612e08565b600088602001518060200190518101906104bf91906131c0565b9050600089604001518060200190518101906104db91906131c0565b90508060006020020151856000815181106104f8576104f8613992565b602090810291909101015280600160200201518560018151811061051e5761051e613992565b602090810291909101015280600260200201518560028151811061054457610544613992565b602090810291909101015280600360200201518560038151811061056a5761056a613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080840187905260a08b8101519085015260c0808c0151908501528a015180516000906105c8576105c8613992565b602090810291909101015160e084015260608a0151805160019081106105f0576105f0613992565b60209081029190910181015161010085015260808b01805151610120860152518101516101408501528151610160850152818101516101808501526040808301516101a086015260608301516101c0860152516102f5918591016135a1565b8560ff166004141561084057610663612e27565b6000886020015180602001905181019061067d919061323a565b905060008960400151806020019051810190610699919061323a565b90508060006020020151856000815181106106b6576106b6613992565b60209081029190910101528060016020020151856001815181106106dc576106dc613992565b602090810291909101015280600260200201518560028151811061070257610702613992565b602090810291909101015280600360200201518560038151811061072857610728613992565b602090810291909101015280600460200201518560048151811061074e5761074e613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080840187905260a08b015160c0808601919091528b015160e08501528a015180516000906107ae576107ae613992565b602090810291909101015160e084015260608a0151805160019081106107d6576107d6613992565b60209081029190910181015161012085015260808b8101805151610140870152518201516101608601528251610180860152828201516101a08601526040808401516101c087015260608401516101e087015290830151610200860152516102f5918591016135d6565b8560ff1660051415610a7457610854612e46565b6000886020015180602001905181019061086e91906132b4565b90506000896040015180602001905181019061088a91906132b4565b90508060006020020151856000815181106108a7576108a7613992565b60209081029190910101528060016020020151856001815181106108cd576108cd613992565b60209081029190910101528060026020020151856002815181106108f3576108f3613992565b602090810291909101015280600360200201518560038151811061091957610919613992565b602090810291909101015280600460200201518560048151811061093f5761093f613992565b602090810291909101015280600560200201518560058151811061096557610965613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a0808401518186015260c0808601899052908c015160e08601528b01516101008501528a015180516000906109d6576109d6613992565b602090810291909101015161012084015260608a0151805160019081106109ff576109ff613992565b60209081029190910181015161014085015260808b81018051516101608701525182015161018086015282516101a0860152828201516101c08601526040808401516101e087015260608401516102008701529083015161022086015260a0830151610240860152516102f59185910161360b565b8560ff1660061415610ce357610a88612e65565b60008860200151806020019051810190610aa2919061332e565b905060008960400151806020019051810190610abe919061332e565b9050806000602002015185600081518110610adb57610adb613992565b6020908102919091010152806001602002015185600181518110610b0157610b01613992565b6020908102919091010152806002602002015185600281518110610b2757610b27613992565b6020908102919091010152806003602002015185600381518110610b4d57610b4d613992565b6020908102919091010152806004602002015185600481518110610b7357610b73613992565b6020908102919091010152806005602002015185600581518110610b9957610b99613992565b6020908102919091010152806006602002015185600681518110610bbf57610bbf613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a0808401518186015260c0808501518187015260e08601899052908c01516101008601528b01516101208501528a01518051600090610c3a57610c3a613992565b602090810291909101015161014084015260608a015180516001908110610c6357610c63613992565b60209081029190910181015161016085015260808b8101805151610180870152518201516101a086015282516101c0860152828201516101e086015260408084015161020087015260608401516102208701529083015161024086015260a083015161026086015260c0830151610280860152516102f591859101613640565b8560ff1660071415610f8d57610cf7612e84565b60008860200151806020019051810190610d1191906133a8565b905060008960400151806020019051810190610d2d91906133a8565b9050806000602002015185600081518110610d4a57610d4a613992565b6020908102919091010152806001602002015185600181518110610d7057610d70613992565b6020908102919091010152806002602002015185600281518110610d9657610d96613992565b6020908102919091010152806003602002015185600381518110610dbc57610dbc613992565b6020908102919091010152806004602002015185600481518110610de257610de2613992565b6020908102919091010152806005602002015185600581518110610e0857610e08613992565b6020908102919091010152806006602002015185600681518110610e2e57610e2e613992565b6020908102919091010152806007602002015185600781518110610e5457610e54613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a0808401518186015260c0808501518187015260e080860151908701526101008601899052908c01516101208601528b01516101408501528a01518051600090610eda57610eda613992565b602090810291909101015161016084015260608a015180516001908110610f0357610f03613992565b60209081029190910181015161018085015260808b81018051516101a0870152518201516101c086015282516101e086015282820151610200860152604080840151610220870152606084015161024087019081529184015190915260a083015161028086015260c08301516102a086015260e08301516102c0860152516102f591859101613675565b60405162461bcd60e51b815260206004820152600d60248201526c496e76616c696420656467657360981b604482015260640160405180910390fd5b969095509350505050565b6060806000610fe16100f0565b65ffffffffffff1690506000610ff8856001613928565b60ff166001600160401b03811115611012576110126139a8565b60405190808252806020026020018201604052801561103b578160200160208202803683370190505b50905060608560ff16600114156113c957611054612ea3565b6000886020015180602001905181019061106e91906130de565b90506000896040015180602001905181019061108a91906130de565b90508060006020020151856000815181106110a7576110a7613992565b60209081029190910101528060016020020151856001815181106110cd576110cd613992565b60209081029190910181019190915282518452828101519084015260a08a0151604084015260c08a01516060808501919091528a0151805160009061111457611114613992565b6020908102919091010151608084015260608a01518051600190811061113c5761113c613992565b602090810291909101015160a084015260608a01518051600290811061116457611164613992565b602090810291909101015160c084015260608a01518051600390811061118c5761118c613992565b602090810291909101015160e084015260608a0151805160049081106111b4576111b4613992565b602090810291909101015161010084015260608a0151805160059081106111dd576111dd613992565b602090810291909101015161012084015260608a01518051600690811061120657611206613992565b602090810291909101015161014084015260608a01518051600790811061122f5761122f613992565b602090810291909101015161016084015260608a01518051600890811061125857611258613992565b602090810291909101015161018084015260608a01518051600990811061128157611281613992565b60209081029190910101516101a084015260608a01518051600a9081106112aa576112aa613992565b60209081029190910101516101c084015260608a01518051600b9081106112d3576112d3613992565b60209081029190910101516101e084015260608a01518051600c9081106112fc576112fc613992565b602090810291909101015161020084015260608a01518051600d90811061132557611325613992565b602090810291909101015161022084015260608a01518051600e90811061134e5761134e613992565b602090810291909101015161024084015260608a01518051600f90811061137757611377613992565b60209081029190910181015161026085015260808b01805151610280860152518101516102a08501526102c0840187905281516102e0850152818101516103008501526040516102f5918591016136aa565b8560ff166002141561178d576113dd612ec2565b600088602001518060200190518101906113f7919061313b565b905060008960400151806020019051810190611413919061313b565b905080600060200201518560008151811061143057611430613992565b602090810291909101015280600160200201518560018151811061145657611456613992565b602090810291909101015280600260200201518560028151811061147c5761147c613992565b6020908102919091018101919091528251845282810151908401526040808301519084015260a08a015160608085019190915260c08b015160808501528a015180516000906114cd576114cd613992565b602090810291909101015160a084015260608a0151805160019081106114f5576114f5613992565b602090810291909101015160c084015260608a01518051600290811061151d5761151d613992565b602090810291909101015160e084015260608a01518051600390811061154557611545613992565b602090810291909101015161010084015260608a01518051600490811061156e5761156e613992565b602090810291909101015161012084015260608a01518051600590811061159757611597613992565b602090810291909101015161014084015260608a0151805160069081106115c0576115c0613992565b602090810291909101015161016084015260608a0151805160079081106115e9576115e9613992565b602090810291909101015161018084015260608a01518051600890811061161257611612613992565b60209081029190910101516101a084015260608a01518051600990811061163b5761163b613992565b60209081029190910101516101c084015260608a01518051600a90811061166457611664613992565b60209081029190910101516101e084015260608a01518051600b90811061168d5761168d613992565b602090810291909101015161020084015260608a01518051600c9081106116b6576116b6613992565b602090810291909101015161022084015260608a01518051600d9081106116df576116df613992565b602090810291909101015161024084015260608a01518051600e90811061170857611708613992565b602090810291909101015161026084015260608a01518051600f90811061173157611731613992565b60209081029190910181015161028085015260808b018051516102a0860152518101516102c08501526102e08401879052815161030085015281810151610320850152604080830151610340860152516102f5918591016136df565b8560ff1660031415611b89576117a1612ee1565b600088602001518060200190518101906117bb91906131c0565b9050600089604001518060200190518101906117d791906131c0565b90508060006020020151856000815181106117f4576117f4613992565b602090810291909101015280600160200201518560018151811061181a5761181a613992565b602090810291909101015280600260200201518560028151811061184057611840613992565b602090810291909101015280600360200201518560038151811061186657611866613992565b602090810291909101810191909152825184528281015190840152604080830151908401526060808301518185015260a08b810151608086015260c08c0151908501528a015180516000906118bd576118bd613992565b602090810291909101015160c084015260608a0151805160019081106118e5576118e5613992565b602090810291909101015160e084015260608a01518051600290811061190d5761190d613992565b602090810291909101015161010084015260608a01518051600390811061193657611936613992565b602090810291909101015161012084015260608a01518051600490811061195f5761195f613992565b602090810291909101015161014084015260608a01518051600590811061198857611988613992565b602090810291909101015161016084015260608a0151805160069081106119b1576119b1613992565b602090810291909101015161018084015260608a0151805160079081106119da576119da613992565b60209081029190910101516101a084015260608a015180516008908110611a0357611a03613992565b60209081029190910101516101c084015260608a015180516009908110611a2c57611a2c613992565b60209081029190910101516101e084015260608a01518051600a908110611a5557611a55613992565b602090810291909101015161020084015260608a01518051600b908110611a7e57611a7e613992565b602090810291909101015161022084015260608a01518051600c908110611aa757611aa7613992565b602090810291909101015161024084015260608a01518051600d908110611ad057611ad0613992565b602090810291909101015161026084015260608a01518051600e908110611af957611af9613992565b602090810291909101015161028084015260608a01518051600f908110611b2257611b22613992565b6020908102919091018101516102a085015260808b018051516102c0860152518101516102e085015261030084018790528151610320850152818101516103408501526040808301516103608601526060830151610380860152516102f591859101613714565b8560ff1660041415611fc157611b9d612f00565b60008860200151806020019051810190611bb7919061323a565b905060008960400151806020019051810190611bd3919061323a565b9050806000602002015185600081518110611bf057611bf0613992565b6020908102919091010152806001602002015185600181518110611c1657611c16613992565b6020908102919091010152806002602002015185600281518110611c3c57611c3c613992565b6020908102919091010152806003602002015185600381518110611c6257611c62613992565b6020908102919091010152806004602002015185600481518110611c8857611c88613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a08b8101519085015260c0808c0151908501528a01518051600090611ce957611ce9613992565b602090810291909101015160e084015260608a015180516001908110611d1157611d11613992565b602090810291909101015161010084015260608a015180516002908110611d3a57611d3a613992565b602090810291909101015161012084015260608a015180516003908110611d6357611d63613992565b602090810291909101015161014084015260608a015180516004908110611d8c57611d8c613992565b602090810291909101015161016084015260608a015180516005908110611db557611db5613992565b602090810291909101015161018084015260608a015180516006908110611dde57611dde613992565b60209081029190910101516101a084015260608a015180516007908110611e0757611e07613992565b60209081029190910101516101c084015260608a015180516008908110611e3057611e30613992565b60209081029190910101516101e084015260608a015180516009908110611e5957611e59613992565b602090810291909101015161020084015260608a01518051600a908110611e8257611e82613992565b602090810291909101015161022084015260608a01518051600b908110611eab57611eab613992565b602090810291909101015161024084015260608a01518051600c908110611ed457611ed4613992565b602090810291909101015161026084015260608a01518051600d908110611efd57611efd613992565b602090810291909101015161028084015260608a01518051600e908110611f2657611f26613992565b60209081029190910101516102a084015260608a01518051600f908110611f4f57611f4f613992565b6020908102919091018101516102c085015260808b81018051516102e087015251820151610300860152610320850188905282516103408601528282015161036086015260408084015161038087015260608401516103a0870152908301516103c0860152516102f591859101613749565b8560ff166005141561243557611fd5612f1f565b60008860200151806020019051810190611fef91906132b4565b90506000896040015180602001905181019061200b91906132b4565b905080600060200201518560008151811061202857612028613992565b602090810291909101015280600160200201518560018151811061204e5761204e613992565b602090810291909101015280600260200201518560028151811061207457612074613992565b602090810291909101015280600360200201518560038151811061209a5761209a613992565b60209081029190910101528060046020020151856004815181106120c0576120c0613992565b60209081029190910101528060056020020151856005815181106120e6576120e6613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a080840151818601528b015160c0808601919091528b015160e08501528a0151805160009061215157612151613992565b602090810291909101015161010084015260608a01518051600190811061217a5761217a613992565b602090810291909101015161012084015260608a0151805160029081106121a3576121a3613992565b602090810291909101015161014084015260608a0151805160039081106121cc576121cc613992565b602090810291909101015161016084015260608a0151805160049081106121f5576121f5613992565b602090810291909101015161018084015260608a01518051600590811061221e5761221e613992565b60209081029190910101516101a084015260608a01518051600690811061224757612247613992565b60209081029190910101516101c084015260608a01518051600790811061227057612270613992565b60209081029190910101516101e084015260608a01518051600890811061229957612299613992565b602090810291909101015161020084015260608a0151805160099081106122c2576122c2613992565b602090810291909101015161022084015260608a01518051600a9081106122eb576122eb613992565b602090810291909101015161024084015260608a01518051600b90811061231457612314613992565b602090810291909101015161026084015260608a01518051600c90811061233d5761233d613992565b602090810291909101015161028084015260608a01518051600d90811061236657612366613992565b60209081029190910101516102a084015260608a01518051600e90811061238f5761238f613992565b60209081029190910101516102c084015260608a01518051600f9081106123b8576123b8613992565b6020908102919091018101516102e085015260808b81018051516103008701525182015161032086015261034085018890528251610360860152828201516103808601526040808401516103a087015260608401516103c0870152908301516103e086015260a0830151610400860152516102f59185910161377e565b8560ff16600614156128e257612449612f3e565b60008860200151806020019051810190612463919061332e565b90506000896040015180602001905181019061247f919061332e565b905080600060200201518560008151811061249c5761249c613992565b60209081029190910101528060016020020151856001815181106124c2576124c2613992565b60209081029190910101528060026020020151856002815181106124e8576124e8613992565b602090810291909101015280600360200201518560038151811061250e5761250e613992565b602090810291909101015280600460200201518560048151811061253457612534613992565b602090810291909101015280600560200201518560058151811061255a5761255a613992565b602090810291909101015280600660200201518560068151811061258057612580613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a0808401518186015260c08085015181870152908c015160e08601528b01516101008501528a015180516000906125f3576125f3613992565b602090810291909101015161012084015260608a01518051600190811061261c5761261c613992565b602090810291909101015161014084015260608a01518051600290811061264557612645613992565b602090810291909101015161016084015260608a01518051600390811061266e5761266e613992565b602090810291909101015161018084015260608a01518051600490811061269757612697613992565b60209081029190910101516101a084015260608a0151805160059081106126c0576126c0613992565b60209081029190910101516101c084015260608a0151805160069081106126e9576126e9613992565b60209081029190910101516101e084015260608a01518051600790811061271257612712613992565b602090810291909101015161020084015260608a01518051600890811061273b5761273b613992565b602090810291909101015161022084015260608a01518051600990811061276457612764613992565b602090810291909101015161024084015260608a01518051600a90811061278d5761278d613992565b602090810291909101015161026084015260608a01518051600b9081106127b6576127b6613992565b602090810291909101015161028084015260608a01518051600c9081106127df576127df613992565b60209081029190910101516102a084015260608a01518051600d90811061280857612808613992565b60209081029190910101516102c084015260608a01518051600e90811061283157612831613992565b60209081029190910101516102e084015260608a01518051600f90811061285a5761285a613992565b60209081029190910181015161030085015260808b81018051516103208701525182015161034086015261036085018890528251610380860152828201516103a08601526040808401516103c087015260608401516103e08701529083015161040086015260a083015161042086015260c0830151610440860152516102f5918591016137b3565b8560ff1660071415610f8d576128f6612f5d565b6000886020015180602001905181019061291091906133a8565b90506000896040015180602001905181019061292c91906133a8565b905080600060200201518560008151811061294957612949613992565b602090810291909101015280600160200201518560018151811061296f5761296f613992565b602090810291909101015280600260200201518560028151811061299557612995613992565b60209081029190910101528060036020020151856003815181106129bb576129bb613992565b60209081029190910101528060046020020151856004815181106129e1576129e1613992565b6020908102919091010152806005602002015185600581518110612a0757612a07613992565b6020908102919091010152806006602002015185600681518110612a2d57612a2d613992565b6020908102919091010152806007602002015185600781518110612a5357612a53613992565b60209081029190910181019190915282518452828101519084015260408083015190840152606080830151818501526080808401519085015260a0808401518186015260c0808501518187015260e08086015190870152908c01516101008601528b01516101208501528a01518051600090612ad157612ad1613992565b602090810291909101015161014084015260608a015180516001908110612afa57612afa613992565b602090810291909101015161016084015260608a015180516002908110612b2357612b23613992565b602090810291909101015161018084015260608a015180516003908110612b4c57612b4c613992565b60209081029190910101516101a084015260608a015180516004908110612b7557612b75613992565b60209081029190910101516101c084015260608a015180516005908110612b9e57612b9e613992565b60209081029190910101516101e084015260608a015180516006908110612bc757612bc7613992565b602090810291909101015161020084015260608a015180516007908110612bf057612bf0613992565b602090810291909101015161022084015260608a015180516008908110612c1957612c19613992565b602090810291909101015161024084015260608a015180516009908110612c4257612c42613992565b602090810291909101015161026084015260608a01518051600a908110612c6b57612c6b613992565b602090810291909101015161028084015260608a01518051600b908110612c9457612c94613992565b60209081029190910101516102a084015260608a01518051600c908110612cbd57612cbd613992565b60209081029190910101516102c084015260608a01518051600d908110612ce657612ce6613992565b60209081029190910101516102e084015260608a01518051600e908110612d0f57612d0f613992565b602090810291909101015161030084015260608a01518051600f908110612d3857612d38613992565b60209081029190910181015161032085015260808b810180515161034087015251820151610360860152610380850188905282516103a0860152828201516103c08601526040808401516103e0870152606084015161040087019081529184015190915260a083015161044086015260c083015161046086015260e0830151610480860152516102f5918591016137e8565b604051806101600160405280600b906020820280368337509192915050565b604051806101a00160405280600d906020820280368337509192915050565b604051806101e00160405280600f906020820280368337509192915050565b6040518061022001604052806011906020820280368337509192915050565b6040518061026001604052806013906020820280368337509192915050565b604051806102a001604052806015906020820280368337509192915050565b604051806102e001604052806017906020820280368337509192915050565b6040518061032001604052806019906020820280368337509192915050565b604051806103600160405280601b906020820280368337509192915050565b604051806103a00160405280601d906020820280368337509192915050565b604051806103e00160405280601f906020820280368337509192915050565b6040518061042001604052806021906020820280368337509192915050565b6040518061046001604052806023906020820280368337509192915050565b604051806104a001604052806025906020820280368337509192915050565b600082601f830112612f8d57600080fd5b612f956138d6565b808385604086011115612fa757600080fd5b60005b6002811015612fc9578135845260209384019390910190600101612faa565b509095945050505050565b600082601f830112612fe557600080fd5b813560206001600160401b03821115613000576130006139a8565b8160051b61300f8282016138f8565b83815282810190868401838801850189101561302a57600080fd5b600093505b8584101561304d57803583526001939093019291840191840161302f565b50979650505050505050565b600082601f83011261306a57600080fd5b81356001600160401b03811115613083576130836139a8565b613096601f8201601f19166020016138f8565b8181528460208386010111156130ab57600080fd5b816020850160208301376000918101602001919091529392505050565b803560ff811681146130d957600080fd5b919050565b6000604082840312156130f057600080fd5b82601f8301126130ff57600080fd5b6131076138d6565b80838560408601111561311957600080fd5b60005b6002811015612fc957815184526020938401939091019060010161311c565b60006060828403121561314d57600080fd5b82601f83011261315c57600080fd5b604051606081018181106001600160401b038211171561317e5761317e6139a8565b60405280836060810186101561319357600080fd5b60005b60038110156131b5578151835260209283019290910190600101613196565b509195945050505050565b6000608082840312156131d257600080fd5b82601f8301126131e157600080fd5b604051608081018181106001600160401b0382111715613203576132036139a8565b60405280836080810186101561321857600080fd5b60005b60048110156131b557815183526020928301929091019060010161321b565b600060a0828403121561324c57600080fd5b82601f83011261325b57600080fd5b60405160a081018181106001600160401b038211171561327d5761327d6139a8565b604052808360a0810186101561329257600080fd5b60005b60058110156131b5578151835260209283019290910190600101613295565b600060c082840312156132c657600080fd5b82601f8301126132d557600080fd5b60405160c081018181106001600160401b03821117156132f7576132f76139a8565b604052808360c0810186101561330c57600080fd5b60005b60068110156131b557815183526020928301929091019060010161330f565b600060e0828403121561334057600080fd5b82601f83011261334f57600080fd5b60405160e081018181106001600160401b0382111715613371576133716139a8565b604052808360e0810186101561338657600080fd5b60005b60078110156131b5578151835260209283019290910190600101613389565b60006101008083850312156133bc57600080fd5b83601f8401126133cb57600080fd5b6040518181018181106001600160401b03821117156133ec576133ec6139a8565b604052808483810187101561340057600080fd5b600093505b6008841015612fc957805182526001939093019260209182019101613405565b6000806040838503121561343857600080fd5b82356001600160401b038082111561344f57600080fd5b90840190610100828703121561346457600080fd5b61346c6138ae565b82358281111561347b57600080fd5b61348788828601613059565b82525060208301358281111561349c57600080fd5b6134a888828601613059565b6020830152506040830135828111156134c057600080fd5b6134cc88828601613059565b6040830152506060830135828111156134e457600080fd5b6134f088828601612fd4565b6060830152506135038760808501612f7c565b608082015260c083013560a082015260e083013560c082015280945050505061352e602084016130c8565b90509250929050565b60008183825b600b81101561355c57815183526020928301929091019060010161353d565b5050506101608201905092915050565b60008183825b600d811015613591578151835260209283019290910190600101613572565b5050506101a08201905092915050565b60008183825b600f8110156135c65781518352602092830192909101906001016135a7565b5050506101e08201905092915050565b60008183825b60118110156135fb5781518352602092830192909101906001016135dc565b5050506102208201905092915050565b60008183825b6013811015613630578151835260209283019290910190600101613611565b5050506102608201905092915050565b60008183825b6015811015613665578151835260209283019290910190600101613646565b5050506102a08201905092915050565b60008183825b601781101561369a57815183526020928301929091019060010161367b565b5050506102e08201905092915050565b60008183825b60198110156136cf5781518352602092830192909101906001016136b0565b5050506103208201905092915050565b60008183825b601b8110156137045781518352602092830192909101906001016136e5565b5050506103608201905092915050565b60008183825b601d81101561373957815183526020928301929091019060010161371a565b5050506103a08201905092915050565b60008183825b601f81101561376e57815183526020928301929091019060010161374f565b5050506103e08201905092915050565b60008183825b60218110156137a3578151835260209283019290910190600101613784565b5050506104208201905092915050565b60008183825b60238110156137d85781518352602092830192909101906001016137b9565b5050506104608201905092915050565b60008183825b602581101561380d5781518352602092830192909101906001016137ee565b5050506104a08201905092915050565b604081526000835180604084015260005b8181101561384b576020818701810151606086840101520161382e565b8181111561385d576000606083860101525b50601f01601f1916820182810360609081016020808601919091528551918301829052858101926000926080909101905b8084101561304d578451825293820193600193909301929082019061388e565b60405160e081016001600160401b03811182821017156138d0576138d06139a8565b60405290565b604080519081016001600160401b03811182821017156138d0576138d06139a8565b604051601f8201601f191681016001600160401b0381118282101715613920576139206139a8565b604052919050565b600060ff821660ff84168060ff0382111561395357634e487b7160e01b600052601160045260246000fd5b019392505050565b805160208201516001600160d01b0319808216929190600683101561398a5780818460060360031b1b83161693505b505050919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220368dbed6b001e3468accb22ce6809624fcb4e4d21ee61552fceb20c98546221364736f6c63430008050033';

export class IdentityVAnchorEncodeInputs__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<IdentityVAnchorEncodeInputs> {
    return super.deploy(overrides || {}) as Promise<IdentityVAnchorEncodeInputs>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IdentityVAnchorEncodeInputs {
    return super.attach(address) as IdentityVAnchorEncodeInputs;
  }
  connect(signer: Signer): IdentityVAnchorEncodeInputs__factory {
    return super.connect(signer) as IdentityVAnchorEncodeInputs__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IdentityVAnchorEncodeInputsInterface {
    return new utils.Interface(_abi) as IdentityVAnchorEncodeInputsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IdentityVAnchorEncodeInputs {
    return new Contract(address, _abi, signerOrProvider) as IdentityVAnchorEncodeInputs;
  }
}
