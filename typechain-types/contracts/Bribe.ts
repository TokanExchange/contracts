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
} from "../common";

export declare namespace IBribe {
  export type RewardStruct = {
    periodFinish: PromiseOrValue<BigNumberish>;
    rewardsPerEpoch: PromiseOrValue<BigNumberish>;
    lastUpdateTime: PromiseOrValue<BigNumberish>;
  };

  export type RewardStructOutput = [BigNumber, BigNumber, BigNumber] & {
    periodFinish: BigNumber;
    rewardsPerEpoch: BigNumber;
    lastUpdateTime: BigNumber;
  };
}

export interface BribeInterface extends utils.Interface {
  functions: {
    "TYPE()": FunctionFragment;
    "_deposit(uint256,uint256)": FunctionFragment;
    "_totalSupply(uint256)": FunctionFragment;
    "_withdraw(uint256,uint256)": FunctionFragment;
    "addReward(address)": FunctionFragment;
    "addRewardToken(address)": FunctionFragment;
    "addRewards(address[])": FunctionFragment;
    "balanceOf(uint256)": FunctionFragment;
    "balanceOfAt(uint256,uint256)": FunctionFragment;
    "bribeFactory()": FunctionFragment;
    "earned(uint256,address)": FunctionFragment;
    "emergencyRecoverERC20(address,uint256)": FunctionFragment;
    "firstBribeTimestamp()": FunctionFragment;
    "getEpochStart()": FunctionFragment;
    "getNextEpochStart()": FunctionFragment;
    "getReward(uint256,address[])": FunctionFragment;
    "getRewardForOwner(uint256,address[])": FunctionFragment;
    "isRewardToken(address)": FunctionFragment;
    "minter()": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "recoverERC20AndUpdateData(address,uint256)": FunctionFragment;
    "rewardData(address,uint256)": FunctionFragment;
    "rewardPerToken(address,uint256)": FunctionFragment;
    "rewardTokens(uint256)": FunctionFragment;
    "rewardsListLength()": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setVoter(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "userRewardPerTokenPaid(uint256,address)": FunctionFragment;
    "userTimestamp(uint256,address)": FunctionFragment;
    "ve()": FunctionFragment;
    "voter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TYPE"
      | "_deposit"
      | "_totalSupply"
      | "_withdraw"
      | "addReward"
      | "addRewardToken"
      | "addRewards"
      | "balanceOf"
      | "balanceOfAt"
      | "bribeFactory"
      | "earned"
      | "emergencyRecoverERC20"
      | "firstBribeTimestamp"
      | "getEpochStart"
      | "getNextEpochStart"
      | "getReward"
      | "getRewardForOwner"
      | "isRewardToken"
      | "minter"
      | "notifyRewardAmount"
      | "owner"
      | "recoverERC20AndUpdateData"
      | "rewardData"
      | "rewardPerToken"
      | "rewardTokens"
      | "rewardsListLength"
      | "setMinter"
      | "setOwner"
      | "setVoter"
      | "totalSupply"
      | "totalSupplyAt"
      | "userRewardPerTokenPaid"
      | "userTimestamp"
      | "ve"
      | "voter"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "TYPE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_deposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addReward",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addRewardToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addRewards",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "bribeFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyRecoverERC20",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "firstBribeTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextEpochStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardForOwner",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isRewardToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20AndUpdateData",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardData",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsListLength",
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
    functionFragment: "setVoter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userTimestamp",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(functionFragment: "TYPE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bribeFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyRecoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstBribeTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEpochStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextEpochStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20AndUpdateData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;

  events: {
    "Recovered(address,uint256)": EventFragment;
    "RewardAdded(address,uint256,uint256)": EventFragment;
    "RewardPaid(address,address,uint256)": EventFragment;
    "Staked(uint256,uint256)": EventFragment;
    "Withdrawn(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface RecoveredEventObject {
  token: string;
  amount: BigNumber;
}
export type RecoveredEvent = TypedEvent<
  [string, BigNumber],
  RecoveredEventObject
>;

export type RecoveredEventFilter = TypedEventFilter<RecoveredEvent>;

export interface RewardAddedEventObject {
  rewardToken: string;
  reward: BigNumber;
  startTimestamp: BigNumber;
}
export type RewardAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RewardAddedEventObject
>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardPaidEventObject {
  user: string;
  rewardsToken: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<
  [string, string, BigNumber],
  RewardPaidEventObject
>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface StakedEventObject {
  tokenId: BigNumber;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[BigNumber, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface WithdrawnEventObject {
  tokenId: BigNumber;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [BigNumber, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface Bribe extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BribeInterface;

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
    TYPE(overrides?: CallOverrides): Promise<[string]>;

    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _totalSupply(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addReward(
      _rewardsToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addRewardToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addRewards(
      _rewardsToken: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    bribeFactory(overrides?: CallOverrides): Promise<[string]>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    emergencyRecoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNextEpochStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isRewardToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      _rewardsToken: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recoverERC20AndUpdateData(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewardData(
      _token: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IBribe.RewardStructOutput]>;

    rewardPerToken(
      _rewardsToken: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVoter(
      _Voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userTimestamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ve(overrides?: CallOverrides): Promise<[string]>;

    voter(overrides?: CallOverrides): Promise<[string]>;
  };

  TYPE(overrides?: CallOverrides): Promise<string>;

  _deposit(
    amount: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _totalSupply(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _withdraw(
    amount: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addReward(
    _rewardsToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addRewardToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addRewards(
    _rewardsToken: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfAt(
    tokenId: PromiseOrValue<BigNumberish>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bribeFactory(overrides?: CallOverrides): Promise<string>;

  earned(
    tokenId: PromiseOrValue<BigNumberish>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  emergencyRecoverERC20(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

  getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    tokenId: PromiseOrValue<BigNumberish>,
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRewardForOwner(
    tokenId: PromiseOrValue<BigNumberish>,
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isRewardToken(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minter(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    _rewardsToken: PromiseOrValue<string>,
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  recoverERC20AndUpdateData(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewardData(
    _token: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBribe.RewardStructOutput>;

  rewardPerToken(
    _rewardsToken: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardTokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

  setMinter(
    _minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVoter(
    _Voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userRewardPerTokenPaid(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userTimestamp(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ve(overrides?: CallOverrides): Promise<string>;

  voter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    TYPE(overrides?: CallOverrides): Promise<string>;

    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    _totalSupply(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addReward(
      _rewardsToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addRewardToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addRewards(
      _rewardsToken: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bribeFactory(overrides?: CallOverrides): Promise<string>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyRecoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    isRewardToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minter(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(
      _rewardsToken: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    recoverERC20AndUpdateData(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardData(
      _token: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBribe.RewardStructOutput>;

    rewardPerToken(
      _rewardsToken: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVoter(
      _Voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTimestamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<string>;

    voter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Recovered(address,uint256)"(
      token?: null,
      amount?: null
    ): RecoveredEventFilter;
    Recovered(token?: null, amount?: null): RecoveredEventFilter;

    "RewardAdded(address,uint256,uint256)"(
      rewardToken?: null,
      reward?: null,
      startTimestamp?: null
    ): RewardAddedEventFilter;
    RewardAdded(
      rewardToken?: null,
      reward?: null,
      startTimestamp?: null
    ): RewardAddedEventFilter;

    "RewardPaid(address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      rewardsToken?: PromiseOrValue<string> | null,
      reward?: null
    ): RewardPaidEventFilter;
    RewardPaid(
      user?: PromiseOrValue<string> | null,
      rewardsToken?: PromiseOrValue<string> | null,
      reward?: null
    ): RewardPaidEventFilter;

    "Staked(uint256,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): StakedEventFilter;
    Staked(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): StakedEventFilter;

    "Withdrawn(uint256,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _totalSupply(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addReward(
      _rewardsToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addRewardToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addRewards(
      _rewardsToken: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bribeFactory(overrides?: CallOverrides): Promise<BigNumber>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyRecoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isRewardToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      _rewardsToken: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20AndUpdateData(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewardData(
      _token: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerToken(
      _rewardsToken: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVoter(
      _Voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTimestamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _totalSupply(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addReward(
      _rewardsToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addRewardToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addRewards(
      _rewardsToken: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bribeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyRecoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    firstBribeTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextEpochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isRewardToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _rewardsToken: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20AndUpdateData(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewardData(
      _token: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerToken(
      _rewardsToken: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVoter(
      _Voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userTimestamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
