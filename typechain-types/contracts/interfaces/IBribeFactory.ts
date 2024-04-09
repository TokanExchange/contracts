/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IBribeFactoryInterface extends utils.Interface {
  functions: {
    "createBribe(address,address,address,string)": FunctionFragment;
    "createExternalBribe(address[])": FunctionFragment;
    "createInternalBribe(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createBribe"
      | "createExternalBribe"
      | "createInternalBribe"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createBribe",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createExternalBribe",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createInternalBribe",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createExternalBribe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createInternalBribe",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBribeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBribeFactoryInterface;

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
    createBribe(
      _owner: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _type: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createExternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createInternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createBribe(
    _owner: PromiseOrValue<string>,
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _type: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createExternalBribe(
    arg0: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createInternalBribe(
    arg0: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createBribe(
      _owner: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    createExternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<string>;

    createInternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createBribe(
      _owner: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _type: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createExternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createInternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createBribe(
      _owner: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _type: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createExternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createInternalBribe(
      arg0: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
