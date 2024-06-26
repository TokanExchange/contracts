/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EpochController,
  EpochControllerInterface,
} from "../../../contracts/automation/EpochController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "batchSize",
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
    name: "checker",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "minter",
    outputs: [
      {
        internalType: "contract IMinter",
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
        name: "_batchSize",
        type: "uint256",
      },
    ],
    name: "setBatchSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "setVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voter",
    outputs: [
      {
        internalType: "contract IVoter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161089f38038061089f83398101604081905261002f91610090565b600280546001600160a01b03199081166001600160a01b039384161790915560008054821694831694909417909355600180549093169116179055600a6003556100d3565b80516001600160a01b038116811461008b57600080fd5b919050565b6000806000606084860312156100a557600080fd5b6100ae84610074565b92506100bc60208501610074565b91506100ca60408501610074565b90509250925092565b6107bd806100e26000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c42cf53511610066578063c42cf53514610121578063cf5303cf14610134578063e4fc6b6d1461014a578063f4daaba114610152578063fca3b5aa1461016957600080fd5b806307546172146100a35780630c340a24146100d357806346c96aac146100e65780634bc2a657146100f9578063576f35e31461010e575b600080fd5b6000546100b6906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6002546100b6906001600160a01b031681565b6001546100b6906001600160a01b031681565b61010c61010736600461068a565b61017c565b005b61010c61011c3660046106ba565b6101c8565b61010c61012f36600461068a565b610238565b61013c61029b565b6040516100ca9291906106d3565b61010c610467565b61015b60035481565b6040519081526020016100ca565b61010c61017736600461068a565b610624565b6002546001600160a01b0316331461019357600080fd5b6001600160a01b0381166101a657600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031633146101df57600080fd5b806000036102335760405162461bcd60e51b815260206004820152601760248201527f62617463682073697a652063616e206e6f742062652030000000000000000000604482015260640160405180910390fd5b600355565b6002546001600160a01b0316331461024f57600080fd5b6002546001600160a01b0316331461026657600080fd5b6001600160a01b03811661027957600080fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60055460ff166060816103975760008054906101000a90046001600160a01b03166001600160a01b031663919840ad6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d919061072b565b915081156103975760015460408051630fbdb69960e11b815290516000926001600160a01b031691631f7b6d329160048083019260209291908290030181865afa15801561036f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610393919061074d565b1191505b81156103cb57506040805160048152602481019091526020810180516001600160e01b031663e4fc6b6d60e01b1790529091565b60008054906101000a90046001600160a01b03166001600160a01b031663d13996086040518163ffffffff1660e01b8152600401602060405180830381865afa15801561041c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610440919061074d565b60405160200161045291815260200190565b60405160208183030381529060405290509091565b60055460ff166104f85760008054906101000a90046001600160a01b03166001600160a01b031663919840ad6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e6919061072b565b6005805460ff19169115159190911790555b60055460ff16156106225760015460408051630fbdb69960e11b815290516000926001600160a01b031691631f7b6d329160048083019260209291908290030181865afa15801561054d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610571919061074d565b9050600060045490506000610593836003548461058e9190610766565b610670565b600154604051633b129c8d60e11b815260048101859052602481018390529192506001600160a01b031690637625391a90604401600060405180830381600087803b1580156105e157600080fd5b505af11580156105f5573d6000803e3d6000fd5b505050818414905080610608578161060b565b60005b6004556005805460ff191691159190911790555050505b565b6002546001600160a01b0316331461063b57600080fd5b6001600160a01b03811661064e57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600081831061067f5781610681565b825b90505b92915050565b60006020828403121561069c57600080fd5b81356001600160a01b03811681146106b357600080fd5b9392505050565b6000602082840312156106cc57600080fd5b5035919050565b821515815260006020604081840152835180604085015260005b81811015610709578581018301518582016060015282016106ed565b506000606082860101526060601f19601f830116850101925050509392505050565b60006020828403121561073d57600080fd5b815180151581146106b357600080fd5b60006020828403121561075f57600080fd5b5051919050565b8082018082111561068457634e487b7160e01b600052601160045260246000fdfea26469706673582212207441e47bff54e352b976ffa2eb6b32066c330324171a3541f9d2466b7b8759a464736f6c63430008150033";

type EpochControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EpochControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EpochController__factory extends ContractFactory {
  constructor(...args: EpochControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _minter: PromiseOrValue<string>,
    _voter: PromiseOrValue<string>,
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EpochController> {
    return super.deploy(
      _minter,
      _voter,
      _gov,
      overrides || {}
    ) as Promise<EpochController>;
  }
  override getDeployTransaction(
    _minter: PromiseOrValue<string>,
    _voter: PromiseOrValue<string>,
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_minter, _voter, _gov, overrides || {});
  }
  override attach(address: string): EpochController {
    return super.attach(address) as EpochController;
  }
  override connect(signer: Signer): EpochController__factory {
    return super.connect(signer) as EpochController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EpochControllerInterface {
    return new utils.Interface(_abi) as EpochControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EpochController {
    return new Contract(address, _abi, signerOrProvider) as EpochController;
  }
}
