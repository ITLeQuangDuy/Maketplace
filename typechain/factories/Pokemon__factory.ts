/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Pokemon, PokemonInterface } from "../Pokemon";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256",
      },
    ],
    name: "setCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612158806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636c0360eb116100de5780638da5cb5b11610097578063b88d4fde11610071578063b88d4fde1461033f578063c87b56dd14610352578063e985e9c514610365578063f2fde38b1461037857600080fd5b80638da5cb5b1461031357806395d89b4114610324578063a22cb4651461032c57600080fd5b80636c0360eb146102bf5780636e9960c3146102c757806370480275146102dc57806370a08231146102ef578063715018a61461030257806375794a3c1461030a57600080fd5b806342842e0e1161014b5780634cd88b76116101255780634cd88b761461027357806355f804b3146102865780636352211e146102995780636a627842146102ac57600080fd5b806342842e0e1461023a57806342966c681461024d57806347786d371461026057600080fd5b806301ffc9a71461019357806306fdde03146101bb578063081812fc146101d0578063095ea7b3146101fb57806323b872dd14610210578063355274ea14610223575b600080fd5b6101a66101a1366004611b03565b61038b565b60405190151581526020015b60405180910390f35b6101c36103dd565b6040516101b29190611b78565b6101e36101de366004611b8b565b61046f565b6040516001600160a01b0390911681526020016101b2565b61020e610209366004611bbb565b610496565b005b61020e61021e366004611be5565b6105b1565b61022c60cd5481565b6040519081526020016101b2565b61020e610248366004611be5565b6105e2565b61020e61025b366004611b8b565b6105fd565b61020e61026e366004611b8b565b610609565b61020e610281366004611ccd565b610616565b61020e610294366004611d31565b610749565b6101e36102a7366004611b8b565b610768565b61022c6102ba366004611d66565b6107c8565b6101c3610879565b6102cf610907565b6040516101b29190611d81565b61020e6102ea366004611d66565b610918565b61022c6102fd366004611d66565b61097c565b61020e610a02565b61022c60cc5481565b6097546001600160a01b03166101e3565b6101c3610a16565b61020e61033a366004611dce565b610a25565b61020e61034d366004611e0a565b610a30565b6101c3610360366004611b8b565b610a68565b6101a6610373366004611e86565b610a99565b61020e610386366004611d66565b610ac7565b60006001600160e01b031982166380ac58cd60e01b14806103bc57506001600160e01b03198216635b5e139f60e01b145b806103d757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060606580546103ec90611eb9565b80601f016020809104026020016040519081016040528092919081815260200182805461041890611eb9565b80156104655780601f1061043a57610100808354040283529160200191610465565b820191906000526020600020905b81548152906001019060200180831161044857829003601f168201915b5050505050905090565b600061047a82610b3d565b506000908152606960205260409020546001600160a01b031690565b60006104a182610768565b9050806001600160a01b0316836001600160a01b031614156105145760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061053057506105308133610a99565b6105a25760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161050b565b6105ac8383610b9c565b505050565b6105bb3382610c0a565b6105d75760405162461bcd60e51b815260040161050b90611ef4565b6105ac838383610c69565b6105ac83838360405180602001604052806000815250610a30565b61060681610dda565b50565b610611610e7d565b60cd55565b600054610100900460ff16158080156106365750600054600160ff909116105b806106505750303b158015610650575060005460ff166001145b6106b35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161050b565b6000805460ff1916600117905580156106d6576000805461ff0019166101001790555b6106e08383610ed7565b6106e8610f25565b6106f360c933610f54565b50600160cc556103e860cd5580156105ac576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b610751610e7d565b80516107649060cb906020840190611a54565b5050565b6000818152606760205260408120546001600160a01b0316806103d75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161050b565b60006107d560c933610f70565b61080d5760405162461bcd60e51b81526020600482015260096024820152682737ba1020b236b4b760b91b604482015260640161050b565b60cd5460cc54111561084e5760405162461bcd60e51b815260206004820152600a6024820152690457863656564206361760b41b604482015260640161050b565b60cc5461085b8382610f92565b60cc805490600061086b83611f57565b90915550909150505b919050565b60cb805461088690611eb9565b80601f01602080910402602001604051908101604052809291908181526020018280546108b290611eb9565b80156108ff5780601f106108d4576101008083540402835291602001916108ff565b820191906000526020600020905b8154815290600101906020018083116108e257829003601f168201915b505050505081565b606061091360c9610fac565b905090565b610920610e7d565b600061092d60c983610f54565b9050806107645760405162461bcd60e51b815260206004820152601860248201527f4164642061646d696e206e6f74207375636365737366756c0000000000000000604482015260640161050b565b60006001600160a01b0382166109e65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161050b565b506001600160a01b031660009081526068602052604090205490565b610a0a610e7d565b610a146000610fb9565b565b6060606680546103ec90611eb9565b61076433838361100b565b610a3a3383610c0a565b610a565760405162461bcd60e51b815260040161050b90611ef4565b610a62848484846110da565b50505050565b60606103d7610a768361110d565b60405180604001604052806005815260200164173539b7b760d91b815250611173565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b610acf610e7d565b6001600160a01b038116610b345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161050b565b61060681610fb9565b6000818152606760205260409020546001600160a01b03166106065760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161050b565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610bd182610768565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c1683610768565b9050806001600160a01b0316846001600160a01b03161480610c3d5750610c3d8185610a99565b80610c615750836001600160a01b0316610c568461046f565b6001600160a01b0316145b949350505050565b826001600160a01b0316610c7c82610768565b6001600160a01b031614610ca25760405162461bcd60e51b815260040161050b90611f72565b6001600160a01b038216610d045760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161050b565b610d1183838360016111af565b826001600160a01b0316610d2482610768565b6001600160a01b031614610d4a5760405162461bcd60e51b815260040161050b90611f72565b600081815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000610de582610768565b9050610df58160008460016111af565b610dfe82610768565b600083815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526068845282852080546000190190558785526067909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6097546001600160a01b03163314610a145760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161050b565b600054610100900460ff16610efe5760405162461bcd60e51b815260040161050b90611fb7565b8151610f11906065906020850190611a54565b5080516105ac906066906020840190611a54565b600054610100900460ff16610f4c5760405162461bcd60e51b815260040161050b90611fb7565b610a14611237565b6000610f69836001600160a01b038416611267565b9392505050565b6001600160a01b03811660009081526001830160205260408120541515610f69565b6107648282604051806020016040528060008152506112b6565b60606000610f69836112e9565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316141561106d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161050b565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6110e5848484610c69565b6110f184848484611345565b610a625760405162461bcd60e51b815260040161050b90612002565b606061111882610b3d565b6000611122611452565b905060008151116111425760405180602001604052806000815250610f69565b8061114c84611461565b60405160200161115d929190612054565b6040516020818303038152906040529392505050565b6060610f6983836040518060200160405280600081525060405180602001604052806000815250604051806020016040528060008152506114fe565b6001811115610a62576001600160a01b038416156111f5576001600160a01b038416600090815260686020526040812080548392906111ef908490612083565b90915550505b6001600160a01b03831615610a62576001600160a01b0383166000908152606860205260408120805483929061122c90849061209a565b909155505050505050565b600054610100900460ff1661125e5760405162461bcd60e51b815260040161050b90611fb7565b610a1433610fb9565b60008181526001830160205260408120546112ae575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103d7565b5060006103d7565b6112c083836117e3565b6112cd6000848484611345565b6105ac5760405162461bcd60e51b815260040161050b90612002565b60608160000180548060200260200160405190810160405280929190818152602001828054801561133957602002820191906000526020600020905b815481526020019060010190808311611325575b50505050509050919050565b60006001600160a01b0384163b1561144757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906113899033908990889088906004016120b2565b602060405180830381600087803b1580156113a357600080fd5b505af19250505080156113d3575060408051601f3d908101601f191682019092526113d0918101906120ef565b60015b61142d573d808015611401576040519150601f19603f3d011682016040523d82523d6000602084013e611406565b606091505b5080516114255760405162461bcd60e51b815260040161050b90612002565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c61565b506001949350505050565b606060cb80546103ec90611eb9565b6060600061146e8361197c565b600101905060008167ffffffffffffffff81111561148e5761148e611c21565b6040519080825280601f01601f1916602001820160405280156114b8576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846114f1576114f6565b6114c2565b509392505050565b805182518451865188516060948a948a948a948a948a94600094909390929091611528919061209a565b611532919061209a565b61153c919061209a565b611546919061209a565b67ffffffffffffffff81111561155e5761155e611c21565b6040519080825280601f01601f191660200182016040528015611588576020820181803683370190505b509050806000805b8851811015611600578881815181106115ab576115ab61210c565b01602001516001600160f81b03191683836115c581611f57565b9450815181106115d7576115d761210c565b60200101906001600160f81b031916908160001a905350806115f881611f57565b915050611590565b5060005b87518110156116745787818151811061161f5761161f61210c565b01602001516001600160f81b031916838361163981611f57565b94508151811061164b5761164b61210c565b60200101906001600160f81b031916908160001a9053508061166c81611f57565b915050611604565b5060005b86518110156116e8578681815181106116935761169361210c565b01602001516001600160f81b03191683836116ad81611f57565b9450815181106116bf576116bf61210c565b60200101906001600160f81b031916908160001a905350806116e081611f57565b915050611678565b5060005b855181101561175c578581815181106117075761170761210c565b01602001516001600160f81b031916838361172181611f57565b9450815181106117335761173361210c565b60200101906001600160f81b031916908160001a9053508061175481611f57565b9150506116ec565b5060005b84518110156117d05784818151811061177b5761177b61210c565b01602001516001600160f81b031916838361179581611f57565b9450815181106117a7576117a761210c565b60200101906001600160f81b031916908160001a905350806117c881611f57565b915050611760565b50909d9c50505050505050505050505050565b6001600160a01b0382166118395760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161050b565b6000818152606760205260409020546001600160a01b03161561189e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161050b565b6118ac6000838360016111af565b6000818152606760205260409020546001600160a01b0316156119115760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161050b565b6001600160a01b038216600081815260686020908152604080832080546001019055848352606790915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106119bb5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106119e7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611a0557662386f26fc10000830492506010015b6305f5e1008310611a1d576305f5e100830492506008015b6127108310611a3157612710830492506004015b60648310611a43576064830492506002015b600a83106103d75760010192915050565b828054611a6090611eb9565b90600052602060002090601f016020900481019282611a825760008555611ac8565b82601f10611a9b57805160ff1916838001178555611ac8565b82800160010185558215611ac8579182015b82811115611ac8578251825591602001919060010190611aad565b50611ad4929150611ad8565b5090565b5b80821115611ad45760008155600101611ad9565b6001600160e01b03198116811461060657600080fd5b600060208284031215611b1557600080fd5b8135610f6981611aed565b60005b83811015611b3b578181015183820152602001611b23565b83811115610a625750506000910152565b60008151808452611b64816020860160208601611b20565b601f01601f19169290920160200192915050565b602081526000610f696020830184611b4c565b600060208284031215611b9d57600080fd5b5035919050565b80356001600160a01b038116811461087457600080fd5b60008060408385031215611bce57600080fd5b611bd783611ba4565b946020939093013593505050565b600080600060608486031215611bfa57600080fd5b611c0384611ba4565b9250611c1160208501611ba4565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611c5257611c52611c21565b604051601f8501601f19908116603f01168101908282118183101715611c7a57611c7a611c21565b81604052809350858152868686011115611c9357600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611cbe57600080fd5b610f6983833560208501611c37565b60008060408385031215611ce057600080fd5b823567ffffffffffffffff80821115611cf857600080fd5b611d0486838701611cad565b93506020850135915080821115611d1a57600080fd5b50611d2785828601611cad565b9150509250929050565b600060208284031215611d4357600080fd5b813567ffffffffffffffff811115611d5a57600080fd5b610c6184828501611cad565b600060208284031215611d7857600080fd5b610f6982611ba4565b6020808252825182820181905260009190848201906040850190845b81811015611dc25783516001600160a01b031683529284019291840191600101611d9d565b50909695505050505050565b60008060408385031215611de157600080fd5b611dea83611ba4565b915060208301358015158114611dff57600080fd5b809150509250929050565b60008060008060808587031215611e2057600080fd5b611e2985611ba4565b9350611e3760208601611ba4565b925060408501359150606085013567ffffffffffffffff811115611e5a57600080fd5b8501601f81018713611e6b57600080fd5b611e7a87823560208401611c37565b91505092959194509250565b60008060408385031215611e9957600080fd5b611ea283611ba4565b9150611eb060208401611ba4565b90509250929050565b600181811c90821680611ecd57607f821691505b60208210811415611eee57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000600019821415611f6b57611f6b611f41565b5060010190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008351612066818460208801611b20565b83519083019061207a818360208801611b20565b01949350505050565b60008282101561209557612095611f41565b500390565b600082198211156120ad576120ad611f41565b500190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906120e590830184611b4c565b9695505050505050565b60006020828403121561210157600080fd5b8151610f6981611aed565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220d69c4d3616626be836cee6a0bba641648675539cd897aa84b5612af8c3f2baec64736f6c63430008090033";

export class Pokemon__factory extends ContractFactory {
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
  ): Promise<Pokemon> {
    return super.deploy(overrides || {}) as Promise<Pokemon>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Pokemon {
    return super.attach(address) as Pokemon;
  }
  connect(signer: Signer): Pokemon__factory {
    return super.connect(signer) as Pokemon__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PokemonInterface {
    return new utils.Interface(_abi) as PokemonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pokemon {
    return new Contract(address, _abi, signerOrProvider) as Pokemon;
  }
}
