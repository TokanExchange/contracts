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

export interface IRewardsDistributorInterface extends utils.Interface {
  functions: {
    "checkpoint_token()": FunctionFragment;
    "checkpoint_total_supply()": FunctionFragment;
    "claimable(uint256)": FunctionFragment;
    "voting_escrow()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkpoint_token"
      | "checkpoint_total_supply"
      | "claimable"
      | "voting_escrow"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint_total_supply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpoint_total_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRewardsDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardsDistributorInterface;

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
    checkpoint_token(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    voting_escrow(overrides?: CallOverrides): Promise<[string]>;
  };

  checkpoint_token(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkpoint_total_supply(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  voting_escrow(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    checkpoint_token(overrides?: CallOverrides): Promise<void>;

    checkpoint_total_supply(overrides?: CallOverrides): Promise<void>;

    claimable(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    checkpoint_token(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpoint_token(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}