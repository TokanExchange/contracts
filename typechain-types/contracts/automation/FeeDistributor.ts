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

export interface FeeDistributorInterface extends utils.Interface {
  functions: {
    "acceptGovernor()": FunctionFragment;
    "batchSize()": FunctionFragment;
    "checker()": FunctionFragment;
    "distribute()": FunctionFragment;
    "governor()": FunctionFragment;
    "interval()": FunctionFragment;
    "intervalOffset()": FunctionFragment;
    "pairFactory()": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "setBatchSize(uint256)": FunctionFragment;
    "setGovernor(address)": FunctionFragment;
    "setInterval(uint256)": FunctionFragment;
    "setIntervalOffset(uint256)": FunctionFragment;
    "setPairFactory(address)": FunctionFragment;
    "setVoter(address)": FunctionFragment;
    "voter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptGovernor"
      | "batchSize"
      | "checker"
      | "distribute"
      | "governor"
      | "interval"
      | "intervalOffset"
      | "pairFactory"
      | "pendingGovernor"
      | "setBatchSize"
      | "setGovernor"
      | "setInterval"
      | "setIntervalOffset"
      | "setPairFactory"
      | "setVoter"
      | "voter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "batchSize", values?: undefined): string;
  encodeFunctionData(functionFragment: "checker", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "intervalOffset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchSize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterval",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIntervalOffset",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPairFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batchSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "intervalOffset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIntervalOffset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;

  events: {};
}

export interface FeeDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeeDistributorInterface;

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
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    checker(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    intervalOffset(overrides?: CallOverrides): Promise<[BigNumber]>;

    pairFactory(overrides?: CallOverrides): Promise<[string]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    setBatchSize(
      _batchSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGovernor(
      _pendingGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInterval(
      _interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIntervalOffset(
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voter(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptGovernor(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchSize(overrides?: CallOverrides): Promise<BigNumber>;

  checker(
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  distribute(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  intervalOffset(overrides?: CallOverrides): Promise<BigNumber>;

  pairFactory(overrides?: CallOverrides): Promise<string>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  setBatchSize(
    _batchSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGovernor(
    _pendingGov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInterval(
    _interval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIntervalOffset(
    _offset: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPairFactory(
    _pairFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVoter(
    _voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    batchSize(overrides?: CallOverrides): Promise<BigNumber>;

    checker(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    distribute(overrides?: CallOverrides): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    intervalOffset(overrides?: CallOverrides): Promise<BigNumber>;

    pairFactory(overrides?: CallOverrides): Promise<string>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    setBatchSize(
      _batchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernor(
      _pendingGov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setInterval(
      _interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIntervalOffset(
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    voter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchSize(overrides?: CallOverrides): Promise<BigNumber>;

    checker(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    intervalOffset(overrides?: CallOverrides): Promise<BigNumber>;

    pairFactory(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    setBatchSize(
      _batchSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGovernor(
      _pendingGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInterval(
      _interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIntervalOffset(
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    intervalOffset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBatchSize(
      _batchSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGovernor(
      _pendingGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInterval(
      _interval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIntervalOffset(
      _offset: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPairFactory(
      _pairFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
