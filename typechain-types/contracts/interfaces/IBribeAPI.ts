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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IBribeAPI {
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

export interface IBribeAPIInterface extends utils.Interface {
  functions: {
    "_deposit(uint256,uint256)": FunctionFragment;
    "_withdraw(uint256,uint256)": FunctionFragment;
    "balanceOfAt(uint256,uint256)": FunctionFragment;
    "earned(uint256,address)": FunctionFragment;
    "firstBribeTimestamp()": FunctionFragment;
    "getEpochStart()": FunctionFragment;
    "getNextEpochStart()": FunctionFragment;
    "getPriorSupplyIndex(uint256)": FunctionFragment;
    "getRewardForOwner(uint256,address[])": FunctionFragment;
    "left(address)": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "rewardData(address,uint256)": FunctionFragment;
    "rewardTokens(uint256)": FunctionFragment;
    "rewardsListLength()": FunctionFragment;
    "rewardsPerEpoch(address,uint256)": FunctionFragment;
    "supplyCheckpoints(uint256)": FunctionFragment;
    "supplyNumCheckpoints()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_deposit"
      | "_withdraw"
      | "balanceOfAt"
      | "earned"
      | "firstBribeTimestamp"
      | "getEpochStart"
      | "getNextEpochStart"
      | "getPriorSupplyIndex"
      | "getRewardForOwner"
      | "left"
      | "notifyRewardAmount"
      | "rewardData"
      | "rewardTokens"
      | "rewardsListLength"
      | "rewardsPerEpoch"
      | "supplyCheckpoints"
      | "supplyNumCheckpoints"
      | "totalSupplyAt"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_deposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
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
    functionFragment: "getPriorSupplyIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardForOwner",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "left",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardData",
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
    functionFragment: "rewardsPerEpoch",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyCheckpoints",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyNumCheckpoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "getPriorSupplyIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBribeAPI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBribeAPIInterface;

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
    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNextEpochStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriorSupplyIndex(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    left(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    notifyRewardAmount(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewardData(
      _token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IBribeAPI.RewardStructOutput] & { _Reward: IBribeAPI.RewardStructOutput }
    >;

    rewardTokens(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsPerEpoch(
      token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supplyCheckpoints(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supplyd: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  _deposit(
    amount: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _withdraw(
    amount: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOfAt(
    tokenId: PromiseOrValue<BigNumberish>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  earned(
    tokenId: PromiseOrValue<BigNumberish>,
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

  getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

  getPriorSupplyIndex(
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardForOwner(
    tokenId: PromiseOrValue<BigNumberish>,
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  left(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  notifyRewardAmount(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewardData(
    _token: PromiseOrValue<string>,
    ts: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBribeAPI.RewardStructOutput>;

  rewardTokens(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsPerEpoch(
    token: PromiseOrValue<string>,
    ts: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supplyCheckpoints(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; supplyd: BigNumber }
  >;

  supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getPriorSupplyIndex(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    left(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardData(
      _token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBribeAPI.RewardStructOutput>;

    rewardTokens(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPerEpoch(
      token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyCheckpoints(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supplyd: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    firstBribeTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getNextEpochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getPriorSupplyIndex(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    left(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewardData(
      _token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPerEpoch(
      token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyCheckpoints(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _deposit(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _withdraw(
      amount: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      tokenId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      tokenId: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstBribeTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextEpochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriorSupplyIndex(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardForOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    left(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewardData(
      _token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsPerEpoch(
      token: PromiseOrValue<string>,
      ts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supplyCheckpoints(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supplyNumCheckpoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
