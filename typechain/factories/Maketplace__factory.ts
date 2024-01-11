/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Maketplace, MaketplaceInterface } from "../Maketplace";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isListing",
        type: "bool",
      },
    ],
    name: "NFTListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NFTSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "NFTUnlisted",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC1155_INTERFACE_ID",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ERC721_INTERFACE_ID",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_listingId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyNft",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyerFee",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addrNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listing",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "listingFee",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextListingId",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rescueStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_listingFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_buyerFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unListingFee",
        type: "uint256",
      },
    ],
    name: "setFee",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_listingId",
        type: "uint256",
      },
    ],
    name: "unListing",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "unListingFee",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611480806100206000396000f3fe60806040526004361061011f5760003560e01c8063715018a6116100a0578063bdea6c4711610064578063bdea6c47146102f6578063c18b7e851461030b578063de74e57b1461031e578063f23a6e61146103a7578063f2fde38b146103d457600080fd5b8063715018a61461025f5780638129fc1c146102745780638da5cb5b14610289578063aaccf1ec146102b1578063bc197c81146102c757600080fd5b80635b65b9ab116100e75780635b65b9ab146101dd5780635c975abb146101fd5780635de6c42f146102205780636a1b7ecc146102365780636a2a45441461024c57600080fd5b8063150b7a02146101245780632ca069a51461016e5780633efae5f814610189578063556f8084146101ad57806359f4a907146101c2575b600080fd5b34801561013057600080fd5b5061015061013f3660046110a9565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020015b60405180910390f35b34801561017a57600080fd5b50610150636cdb3d1360e11b81565b34801561019557600080fd5b5061019f60cd5481565b604051908152602001610165565b6101c06101bb366004611118565b6103f4565b005b3480156101ce57600080fd5b506101506380ac58cd60e01b81565b3480156101e957600080fd5b506101c06101f836600461113a565b61060c565b34801561020957600080fd5b5060655460ff166040519015158152602001610165565b34801561022c57600080fd5b5061019f60cc5481565b34801561024257600080fd5b5061019f60cb5481565b6101c061025a366004611166565b610622565b34801561026b57600080fd5b506101c06107f8565b34801561028057600080fd5b506101c061080c565b34801561029557600080fd5b506033546040516001600160a01b039091168152602001610165565b3480156102bd57600080fd5b5061019f60ca5481565b3480156102d357600080fd5b506101506102e23660046111c4565b63bc197c8160e01b98975050505050505050565b34801561030257600080fd5b506101c061092c565b6101c061031936600461127f565b610934565b34801561032a57600080fd5b50610374610339366004611166565b60c960205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949390921692909185565b604080516001600160a01b039687168152959094166020860152928401919091526060830152608082015260a001610165565b3480156103b357600080fd5b506101506103c23660046112b8565b63f23a6e6160e01b9695505050505050565b3480156103e057600080fd5b506101c06103ef366004611330565b610ae0565b6103fc610b56565b610404610b9c565b600082815260c96020908152604091829020825160a08101845281546001600160a01b039081168083526001840154909116938201939093526002820154938101939093526003810154606084015260040154608083015261049e5760405162461bcd60e51b815260206004820152600e60248201526d139195081b9bdd081b1a5cdd195960921b60448201526064015b60405180910390fd5b600082116104be5760405162461bcd60e51b815260040161049590611352565b80606001518211156105035760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152606401610495565b6000828260800151610515919061138c565b90506105278260200151303384610bf6565b6105408260200151303385604001518660600151610ca7565b82826060015161055091906113ab565b606083018190526105d357600084815260c96020908152604080832080546001600160a01b03199081168255600182018054909116905560028101849055600381018490556004019290925581513381529081018690527f8a7922f72dc2a50a632acdde12b7d222aefa2fdb7f3ca1364b419734569d0e80910160405180910390a15b6040517f36a151de1ad98efa19a05c146806baf2ea97c57a057bc767efafb0cdf76843c690600090a150506106086001609755565b5050565b610614610f0e565b60cb9290925560cc5560cd55565b61062a610b56565b610632610b9c565b600081815260c96020908152604091829020825160a08101845281546001600160a01b03908116808352600184015490911693820193909352600282015493810193909352600381015460608401526004015460808301526106c65760405162461bcd60e51b815260206004820152600d60248201526c24a2103737ba1039b2b63632b960991b6044820152606401610495565b60cd54341461070f5760405162461bcd60e51b8152602060048201526015602482015274496e76616c696420756e6c697374696e672066656560581b6044820152606401610495565b80516001600160a01b031633146107595760405162461bcd60e51b815260206004820152600e60248201526d27232a103737ba1039b2b63632b960911b6044820152606401610495565b610776816020015130836000015184604001518560600151610ca7565b60408051338152602081018490527f8a7922f72dc2a50a632acdde12b7d222aefa2fdb7f3ca1364b419734569d0e80910160405180910390a150600081815260c96020526040812080546001600160a01b0319908116825560018201805490911690556002810182905560038101829055600401556107f56001609755565b50565b610800610f0e565b61080a6000610f68565b565b600054610100900460ff161580801561082c5750600054600160ff909116105b806108465750303b158015610846575060005460ff166001145b6108a95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610495565b6000805460ff1916600117905580156108cc576000805461ff0019166101001790555b6108d4610fba565b6108dc610fed565b6108e461101d565b80156107f5576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b61080a610f0e565b61093c610b56565b610944610b9c565b60cb54341461098b5760405162461bcd60e51b8152602060048201526013602482015272496e76616c6964206c697374696e672066656560681b6044820152606401610495565b600082116109db5760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610495565b6109e88433308686610ca7565b6040805160a0810182523381526001600160a01b038681166020808401918252838501888152606085018881526080860188815260ca8054600090815260c9909552978420965187549087166001600160a01b0319918216178855945160018801805491909716951694909417909455516002850155915160038401555160049092019190915581549190610a7c836113c2565b9091555050604080513381526020810185905290810183905260608101829052600160808201527f0df09de10ac3779e5b2c4414eff804f70e28d87825268aa245685a3af0ae535a9060a00160405180910390a1610ada6001609755565b50505050565b610ae8610f0e565b6001600160a01b038116610b4d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610495565b6107f581610f68565b60655460ff161561080a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610495565b60026097541415610bef5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610495565b6002609755565b60008111610c165760405162461bcd60e51b815260040161049590611352565b6040516323b872dd60e01b81526001600160a01b0384811660048301528381166024830152604482018390528516906323b872dd90606401602060405180830381600087803b158015610c6857600080fd5b505af1158015610c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca091906113dd565b5050505050565b60008111610cc75760405162461bcd60e51b815260040161049590611352565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038616906301ffc9a79060240160206040518083038186803b158015610d0d57600080fd5b505afa158015610d21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4591906113dd565b15610dfe5780600114610d8f5760405162461bcd60e51b8152602060048201526012602482015271416d6f756e7420657263373231203d3d203160701b6044820152606401610495565b604051632142170760e11b81526001600160a01b0385811660048301528481166024830152604482018490528616906342842e0e90606401600060405180830381600087803b158015610de157600080fd5b505af1158015610df5573d6000803e3d6000fd5b50505050610ca0565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038616906301ffc9a79060240160206040518083038186803b158015610e4457600080fd5b505afa158015610e58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7c91906113dd565b15610ca057604051637921219560e11b81526001600160a01b0385811660048301528481166024830152604482018490526064820183905260a06084830152600060a483015286169063f242432a9060c401600060405180830381600087803b158015610ee857600080fd5b505af1158015610efc573d6000803e3d6000fd5b505050505050505050565b6001609755565b6033546001600160a01b0316331461080a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610fe15760405162461bcd60e51b8152600401610495906113ff565b6065805460ff19169055565b600054610100900460ff166110145760405162461bcd60e51b8152600401610495906113ff565b61080a33610f68565b600054610100900460ff16610f075760405162461bcd60e51b8152600401610495906113ff565b80356001600160a01b038116811461105b57600080fd5b919050565b60008083601f84011261107257600080fd5b50813567ffffffffffffffff81111561108a57600080fd5b6020830191508360208285010111156110a257600080fd5b9250929050565b6000806000806000608086880312156110c157600080fd5b6110ca86611044565b94506110d860208701611044565b935060408601359250606086013567ffffffffffffffff8111156110fb57600080fd5b61110788828901611060565b969995985093965092949392505050565b6000806040838503121561112b57600080fd5b50508035926020909101359150565b60008060006060848603121561114f57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561117857600080fd5b5035919050565b60008083601f84011261119157600080fd5b50813567ffffffffffffffff8111156111a957600080fd5b6020830191508360208260051b85010111156110a257600080fd5b60008060008060008060008060a0898b0312156111e057600080fd5b6111e989611044565b97506111f760208a01611044565b9650604089013567ffffffffffffffff8082111561121457600080fd5b6112208c838d0161117f565b909850965060608b013591508082111561123957600080fd5b6112458c838d0161117f565b909650945060808b013591508082111561125e57600080fd5b5061126b8b828c01611060565b999c989b5096995094979396929594505050565b6000806000806080858703121561129557600080fd5b61129e85611044565b966020860135965060408601359560600135945092505050565b60008060008060008060a087890312156112d157600080fd5b6112da87611044565b95506112e860208801611044565b94506040870135935060608701359250608087013567ffffffffffffffff81111561131257600080fd5b61131e89828a01611060565b979a9699509497509295939492505050565b60006020828403121561134257600080fd5b61134b82611044565b9392505050565b6020808252600a90820152690416d6f756e74203e20360b41b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156113a6576113a6611376565b500290565b6000828210156113bd576113bd611376565b500390565b60006000198214156113d6576113d6611376565b5060010190565b6000602082840312156113ef57600080fd5b8151801515811461134b57600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea264697066735822122039f98d0d5cc17eac9e4b65d4072522e207d4953913092c300bfd769b5ff36f1364736f6c63430008090033";

export class Maketplace__factory extends ContractFactory {
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
  ): Promise<Maketplace> {
    return super.deploy(overrides || {}) as Promise<Maketplace>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Maketplace {
    return super.attach(address) as Maketplace;
  }
  connect(signer: Signer): Maketplace__factory {
    return super.connect(signer) as Maketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaketplaceInterface {
    return new utils.Interface(_abi) as MaketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Maketplace {
    return new Contract(address, _abi, signerOrProvider) as Maketplace;
  }
}