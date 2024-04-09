/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace VeNFTAPI {
  export type RewardStruct = {
    id: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    decimals: PromiseOrValue<BigNumberish>;
    pair: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    fee: PromiseOrValue<string>;
    bribe: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
  };

  export type RewardStructOutput = [
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    string,
    string
  ] & {
    id: BigNumber;
    amount: BigNumber;
    decimals: number;
    pair: string;
    token: string;
    fee: string;
    bribe: string;
    symbol: string;
  };

  export type AllPairRewardsStruct = { rewards: VeNFTAPI.RewardStruct[] };

  export type AllPairRewardsStructOutput = [VeNFTAPI.RewardStructOutput[]] & {
    rewards: VeNFTAPI.RewardStructOutput[];
  };

  export type PairVotesStruct = {
    pair: PromiseOrValue<string>;
    weight: PromiseOrValue<BigNumberish>;
  };

  export type PairVotesStructOutput = [string, BigNumber] & {
    pair: string;
    weight: BigNumber;
  };

  export type VeNFTStruct = {
    decimals: PromiseOrValue<BigNumberish>;
    voted: PromiseOrValue<boolean>;
    id: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    voting_amount: PromiseOrValue<BigNumberish>;
    rebase_amount: PromiseOrValue<BigNumberish>;
    lockEnd: PromiseOrValue<BigNumberish>;
    vote_ts: PromiseOrValue<BigNumberish>;
    votes: VeNFTAPI.PairVotesStruct[];
    account: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    tokenSymbol: PromiseOrValue<string>;
    tokenDecimals: PromiseOrValue<BigNumberish>;
  };

  export type VeNFTStructOutput = [
    number,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    VeNFTAPI.PairVotesStructOutput[],
    string,
    string,
    string,
    BigNumber
  ] & {
    decimals: number;
    voted: boolean;
    id: BigNumber;
    amount: BigNumber;
    voting_amount: BigNumber;
    rebase_amount: BigNumber;
    lockEnd: BigNumber;
    vote_ts: BigNumber;
    votes: VeNFTAPI.PairVotesStructOutput[];
    account: string;
    token: string;
    tokenSymbol: string;
    tokenDecimals: BigNumber;
  };
}

export interface VeNFTAPIInterface extends utils.Interface {
  functions: {
    "MAX_PAIRS()": FunctionFragment;
    "MAX_RESULTS()": FunctionFragment;
    "allPairRewards(uint256,uint256,uint256)": FunctionFragment;
    "getAllNFT(uint256,uint256)": FunctionFragment;
    "getNFTFromAddress(address)": FunctionFragment;
    "getNFTFromId(uint256)": FunctionFragment;
    "hasClaimableRewards(uint256)": FunctionFragment;
    "initialize(address,address,address,address,address,address)": FunctionFragment;
    "minter()": FunctionFragment;
    "notReward(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pairAPI()": FunctionFragment;
    "pairFactory()": FunctionFragment;
    "rebaseAmount()": FunctionFragment;
    "rewardDistributor()": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setPairAPI(address)": FunctionFragment;
    "setPairFactory(address)": FunctionFragment;
    "setRewardDistro(address)": FunctionFragment;
    "setVoter(address)": FunctionFragment;
    "setVotingEscrow(address)": FunctionFragment;
    "singlePairReward(uint256,address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "ve()": FunctionFragment;
    "voter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_PAIRS"
      | "MAX_RESULTS"
      | "allPairRewards"
      | "getAllNFT"
      | "getNFTFromAddress"
      | "getNFTFromId"
      | "hasClaimableRewards"
      | "initialize"
      | "minter"
      | "notReward"
      | "owner"
      | "pairAPI"
      | "pairFactory"
      | "rebaseAmount"
      | "rewardDistributor"
      | "setMinter"
      | "setOwner"
      | "setPairAPI"
      | "setPairFactory"
      | "setRewardDistro"
      | "setVoter"
      | "setVotingEscrow"
      | "singlePairReward"
      | "underlyingToken"
      | "ve"
      | "voter"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MAX_PAIRS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_RESULTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allPairRewards",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllNFT",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTFromAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTFromId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimableRewards",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notReward",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pairAPI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pairFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebaseAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPairAPI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPairFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardDistro",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingEscrow",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "singlePairReward",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "MAX_PAIRS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_RESULTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allPairRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAllNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNFTFromAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTFromId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "notReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairAPI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rebaseAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPairAPI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardDistro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVotingEscrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "singlePairReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Owner(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Owner"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnerEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerEvent = TypedEvent<[string, string], OwnerEventObject>;

export type OwnerEventFilter = TypedEventFilter<OwnerEvent>;

export interface VeNFTAPI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VeNFTAPIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_PAIRS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_RESULTS(overrides?: CallOverrides): Promise<[BigNumber]>;

    allPairRewards(
      _amount: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [VeNFTAPI.AllPairRewardsStructOutput[]] & {
        rewards: VeNFTAPI.AllPairRewardsStructOutput[];
      }
    >;

    getAllNFT(
      _amounts: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [VeNFTAPI.VeNFTStructOutput[]] & { _veNFT: VeNFTAPI.VeNFTStructOutput[] }
    >;

    getNFTFromAddress(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [VeNFTAPI.VeNFTStructOutput[]] & { venft: VeNFTAPI.VeNFTStructOutput[] }
    >;

    getNFTFromId(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VeNFTAPI.VeNFTStructOutput]>;

    hasClaimableRewards(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _voter: PromiseOrValue<string>,
      _ve: PromiseOrValue<string>,
      _pairApi: PromiseOrValue<string>,
      _pairFactory: PromiseOrValue<string>,
      _minter: PromiseOrValue<string>,
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    notReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pairAPI(overrides?: CallOverrides): Promise<[string]>;

    pairFactory(overrides?: CallOverrides): Promise<[string]>;

    rebaseAmount(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;

    rewardDistributor(overrides?: CallOverrides): Promise<[string]>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPairAPI(
      _pairApi: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRewardDistro(
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVotingEscrow(
      _votingEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    singlePairReward(
      id: PromiseOrValue<BigNumberish>,
      _pair: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [VeNFTAPI.RewardStructOutput[]] & {
        _reward: VeNFTAPI.RewardStructOutput[];
      }
    >;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    ve(overrides?: CallOverrides): Promise<[string]>;

    voter(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_PAIRS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_RESULTS(overrides?: CallOverrides): Promise<BigNumber>;

  allPairRewards(
    _amount: PromiseOrValue<BigNumberish>,
    _offset: PromiseOrValue<BigNumberish>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VeNFTAPI.AllPairRewardsStructOutput[]>;

  getAllNFT(
    _amounts: PromiseOrValue<BigNumberish>,
    _offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VeNFTAPI.VeNFTStructOutput[]>;

  getNFTFromAddress(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<VeNFTAPI.VeNFTStructOutput[]>;

  getNFTFromId(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VeNFTAPI.VeNFTStructOutput>;

  hasClaimableRewards(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _voter: PromiseOrValue<string>,
    _ve: PromiseOrValue<string>,
    _pairApi: PromiseOrValue<string>,
    _pairFactory: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _rewarddistro: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  minter(overrides?: CallOverrides): Promise<string>;

  notReward(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pairAPI(overrides?: CallOverrides): Promise<string>;

  pairFactory(overrides?: CallOverrides): Promise<string>;

  rebaseAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  rewardDistributor(overrides?: CallOverrides): Promise<string>;

  setMinter(
    _minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPairAPI(
    _pairApi: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPairFactory(
    _pairFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRewardDistro(
    _rewarddistro: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVoter(
    _voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVotingEscrow(
    _votingEscrow: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  singlePairReward(
    id: PromiseOrValue<BigNumberish>,
    _pair: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<VeNFTAPI.RewardStructOutput[]>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  ve(overrides?: CallOverrides): Promise<string>;

  voter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_PAIRS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_RESULTS(overrides?: CallOverrides): Promise<BigNumber>;

    allPairRewards(
      _amount: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VeNFTAPI.AllPairRewardsStructOutput[]>;

    getAllNFT(
      _amounts: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VeNFTAPI.VeNFTStructOutput[]>;

    getNFTFromAddress(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<VeNFTAPI.VeNFTStructOutput[]>;

    getNFTFromId(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VeNFTAPI.VeNFTStructOutput>;

    hasClaimableRewards(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _voter: PromiseOrValue<string>,
      _ve: PromiseOrValue<string>,
      _pairApi: PromiseOrValue<string>,
      _pairFactory: PromiseOrValue<string>,
      _minter: PromiseOrValue<string>,
      _rewarddistro: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    minter(overrides?: CallOverrides): Promise<string>;

    notReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pairAPI(overrides?: CallOverrides): Promise<string>;

    pairFactory(overrides?: CallOverrides): Promise<string>;

    rebaseAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    rewardDistributor(overrides?: CallOverrides): Promise<string>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPairAPI(
      _pairApi: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardDistro(
      _rewarddistro: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingEscrow(
      _votingEscrow: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    singlePairReward(
      id: PromiseOrValue<BigNumberish>,
      _pair: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<VeNFTAPI.RewardStructOutput[]>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    ve(overrides?: CallOverrides): Promise<string>;

    voter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Owner(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerEventFilter;
    Owner(oldOwner?: null, newOwner?: null): OwnerEventFilter;
  };

  estimateGas: {
    MAX_PAIRS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_RESULTS(overrides?: CallOverrides): Promise<BigNumber>;

    allPairRewards(
      _amount: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllNFT(
      _amounts: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTFromAddress(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTFromId(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasClaimableRewards(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _voter: PromiseOrValue<string>,
      _ve: PromiseOrValue<string>,
      _pairApi: PromiseOrValue<string>,
      _pairFactory: PromiseOrValue<string>,
      _minter: PromiseOrValue<string>,
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    notReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pairAPI(overrides?: CallOverrides): Promise<BigNumber>;

    pairFactory(overrides?: CallOverrides): Promise<BigNumber>;

    rebaseAmount(overrides?: CallOverrides): Promise<BigNumber>;

    rewardDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPairAPI(
      _pairApi: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRewardDistro(
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVotingEscrow(
      _votingEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    singlePairReward(
      id: PromiseOrValue<BigNumberish>,
      _pair: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PAIRS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_RESULTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairRewards(
      _amount: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllNFT(
      _amounts: PromiseOrValue<BigNumberish>,
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTFromAddress(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTFromId(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasClaimableRewards(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _voter: PromiseOrValue<string>,
      _ve: PromiseOrValue<string>,
      _pairApi: PromiseOrValue<string>,
      _pairFactory: PromiseOrValue<string>,
      _minter: PromiseOrValue<string>,
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairAPI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebaseAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPairAPI(
      _pairApi: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRewardDistro(
      _rewarddistro: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVotingEscrow(
      _votingEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    singlePairReward(
      id: PromiseOrValue<BigNumberish>,
      _pair: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}