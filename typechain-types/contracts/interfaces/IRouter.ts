/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface IRouterInterface extends utils.Interface {
  functions: {
    "pairFor(address,address,bool)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "pairFor"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "pairFor",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;

  events: {};
}

export interface IRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouterInterface;

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
    pairFor(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;
  };

  pairFor(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    stable: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    pairFor(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    pairFor(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pairFor(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
