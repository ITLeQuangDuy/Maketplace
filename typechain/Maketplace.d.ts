/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MaketplaceInterface extends ethers.utils.Interface {
  functions: {
    "ERC1155_INTERFACE_ID()": FunctionFragment;
    "ERC721_INTERFACE_ID()": FunctionFragment;
    "buyNft(uint256,uint256)": FunctionFragment;
    "buyerFee()": FunctionFragment;
    "initialize()": FunctionFragment;
    "listing(address,address,uint256,uint256,uint256)": FunctionFragment;
    "listingFee()": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "nextListingId()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueStuck()": FunctionFragment;
    "setFee(uint256,uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unListing(uint256)": FunctionFragment;
    "unListingFee()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ERC1155_INTERFACE_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ERC721_INTERFACE_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyNft",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buyerFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listing",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listingFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextListingId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueStuck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unListingFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC1155_INTERFACE_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ERC721_INTERFACE_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyerFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listingFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextListingId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueStuck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unListingFee",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "NFTListed(address,uint256,uint256,uint256,bool)": EventFragment;
    "NFTSold()": EventFragment;
    "NFTUnlisted(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTUnlisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type NFTListedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, boolean] & {
    seller: string;
    tokenId: BigNumber;
    amount: BigNumber;
    price: BigNumber;
    isListing: boolean;
  }
>;

export type NFTSoldEvent = TypedEvent<[] & {}>;

export type NFTUnlistedEvent = TypedEvent<
  [string, BigNumber] & { userAddress: string; listingId: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Maketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MaketplaceInterface;

  functions: {
    ERC1155_INTERFACE_ID(overrides?: CallOverrides): Promise<[string]>;

    ERC721_INTERFACE_ID(overrides?: CallOverrides): Promise<[string]>;

    buyNft(
      _listingId: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyerFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listing(
      _addrNft: string,
      _paymentToken: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listingFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        seller: string;
        paymentToken: string;
        nft: string;
        tokenId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    nextListingId(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC1155Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueStuck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _listingFee: BigNumberish,
      _buyerFee: BigNumberish,
      _unListingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unListing(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unListingFee(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ERC1155_INTERFACE_ID(overrides?: CallOverrides): Promise<string>;

  ERC721_INTERFACE_ID(overrides?: CallOverrides): Promise<string>;

  buyNft(
    _listingId: BigNumberish,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyerFee(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listing(
    _addrNft: string,
    _paymentToken: string,
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _price: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listingFee(overrides?: CallOverrides): Promise<BigNumber>;

  listings(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber] & {
      seller: string;
      paymentToken: string;
      nft: string;
      tokenId: BigNumber;
      amount: BigNumber;
      price: BigNumber;
    }
  >;

  nextListingId(overrides?: CallOverrides): Promise<BigNumber>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC1155Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueStuck(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _listingFee: BigNumberish,
    _buyerFee: BigNumberish,
    _unListingFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unListing(
    _listingId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unListingFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ERC1155_INTERFACE_ID(overrides?: CallOverrides): Promise<string>;

    ERC721_INTERFACE_ID(overrides?: CallOverrides): Promise<string>;

    buyNft(
      _listingId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyerFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    listing(
      _addrNft: string,
      _paymentToken: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    listingFee(overrides?: CallOverrides): Promise<BigNumber>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        seller: string;
        paymentToken: string;
        nft: string;
        tokenId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    nextListingId(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueStuck(overrides?: CallOverrides): Promise<void>;

    setFee(
      _listingFee: BigNumberish,
      _buyerFee: BigNumberish,
      _unListingFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unListing(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unListingFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "NFTListed(address,uint256,uint256,uint256,bool)"(
      seller?: null,
      tokenId?: null,
      amount?: null,
      price?: null,
      isListing?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, boolean],
      {
        seller: string;
        tokenId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
        isListing: boolean;
      }
    >;

    NFTListed(
      seller?: null,
      tokenId?: null,
      amount?: null,
      price?: null,
      isListing?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, boolean],
      {
        seller: string;
        tokenId: BigNumber;
        amount: BigNumber;
        price: BigNumber;
        isListing: boolean;
      }
    >;

    "NFTSold()"(): TypedEventFilter<[], {}>;

    NFTSold(): TypedEventFilter<[], {}>;

    "NFTUnlisted(address,uint256)"(
      userAddress?: null,
      listingId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress: string; listingId: BigNumber }
    >;

    NFTUnlisted(
      userAddress?: null,
      listingId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress: string; listingId: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    ERC1155_INTERFACE_ID(overrides?: CallOverrides): Promise<BigNumber>;

    ERC721_INTERFACE_ID(overrides?: CallOverrides): Promise<BigNumber>;

    buyNft(
      _listingId: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyerFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listing(
      _addrNft: string,
      _paymentToken: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listingFee(overrides?: CallOverrides): Promise<BigNumber>;

    listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    nextListingId(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueStuck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _listingFee: BigNumberish,
      _buyerFee: BigNumberish,
      _unListingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unListing(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unListingFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC1155_INTERFACE_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ERC721_INTERFACE_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyNft(
      _listingId: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listing(
      _addrNft: string,
      _paymentToken: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listingFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextListingId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueStuck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _listingFee: BigNumberish,
      _buyerFee: BigNumberish,
      _unListingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unListing(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unListingFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
