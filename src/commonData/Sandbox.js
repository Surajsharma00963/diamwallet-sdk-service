export const Sandbox = {
  mode: "dev",
  binanceProvider: "https://data-seed-prebsc-1-s1.binance.org:8545",

  diamURL: "https://diamtestnet.diamcircle.io/",

  ethereumprovider:
    "https://sepolia.infura.io/v3/c4ce3e1336ba4711b054713d6027bfcf",
  binanceContractURL:
    "https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=",
  ethereumContractURL:
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=",
  binanceAPIKey: "44HFKXBD6MRQ4V3FC2BTQUYQ88E4NG4XWP",
  DIAMNetKey: "Diamante Testnet 2024",
  etherumAPIKey: "PWM3WAPQ33VPIEGCQSQUSQYDPA638PJZYU",
  binanceTransaction: "https://api-testnet.bscscan.com/api?module=account&",
  ethereumTransaction: "https://api-sepolia.etherscan.io/api?module=account&",
  BSCexplorer: "https://testnet.bscscan.com/",
  ETHexplorer: "https://sepolia.etherscan.io/",
  DIAMexplorer: "https://testnetexplorer.diamcircle.io/",
  TronExplorer: "https://nile.tronscan.org/#/",
  TronProvider: "",
  gameDispense: "https://cryptnewsapi.diamcircle.io",
  TronApiKey: "8a7ec612-bd6a-4365-a6f9-887e465808c9",
  TronContractURL: "",
  poolWalletAddress: "GA65FP4MMVPKHQ4MYF7G24SPTRDQF6DZBFKJQOWQFES4SIN4AOGOPBZT",
  TronTransaction: "https://nile.trongrid.io/v1/accounts/",
  tronAPI: "https://nile.trongrid.io",
  // abi: [
  //   {
  //     asset: "DIAM",
  //     network: 0,
  //     abi: "",
  //     address: "",
  //     decimals: 18,
  //     image: {
  //       src: require("../../assets/images/DIAM.png"),
  //       label: "image",
  //     },
  //   },
  //   {
  //     asset: "DIAM (ERC20)",
  //     network: 2,
  //     abi: [
  //       { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  //       { inputs: [], name: "InvalidShortString", type: "error" },
  //       {
  //         inputs: [{ internalType: "string", name: "str", type: "string" }],
  //         name: "StringTooLong",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [],
  //         name: "EIP712DomainChanged",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "previousOwner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnershipTransferred",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [],
  //         name: "DOMAIN_SEPARATOR",
  //         outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "owner", type: "address" },
  //           { internalType: "address", name: "spender", type: "address" },
  //         ],
  //         name: "allowance",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "approve",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "account", type: "address" },
  //         ],
  //         name: "balanceOf",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           {
  //             internalType: "uint256",
  //             name: "subtractedValue",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "decreaseAllowance",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "eip712Domain",
  //         outputs: [
  //           { internalType: "bytes1", name: "fields", type: "bytes1" },
  //           { internalType: "string", name: "name", type: "string" },
  //           { internalType: "string", name: "version", type: "string" },
  //           { internalType: "uint256", name: "chainId", type: "uint256" },
  //           {
  //             internalType: "address",
  //             name: "verifyingContract",
  //             type: "address",
  //           },
  //           { internalType: "bytes32", name: "salt", type: "bytes32" },
  //           {
  //             internalType: "uint256[]",
  //             name: "extensions",
  //             type: "uint256[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "addedValue", type: "uint256" },
  //         ],
  //         name: "increaseAllowance",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //           { internalType: "bytes32", name: "_hash", type: "bytes32" },
  //           { internalType: "uint8", name: "_v", type: "uint8" },
  //           { internalType: "bytes32", name: "_r", type: "bytes32" },
  //           { internalType: "bytes32", name: "_s", type: "bytes32" },
  //           { internalType: "uint256", name: "deadline", type: "uint256" },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [{ internalType: "string", name: "", type: "string" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [{ internalType: "address", name: "owner", type: "address" }],
  //         name: "nonces",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "owner",
  //         outputs: [{ internalType: "address", name: "", type: "address" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "ownerNounce",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "owner", type: "address" },
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "value", type: "uint256" },
  //           { internalType: "uint256", name: "deadline", type: "uint256" },
  //           { internalType: "uint8", name: "v", type: "uint8" },
  //           { internalType: "bytes32", name: "r", type: "bytes32" },
  //           { internalType: "bytes32", name: "s", type: "bytes32" },
  //         ],
  //         name: "permit",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "renounceOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [{ internalType: "string", name: "", type: "string" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "to", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "transfer",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "from", type: "address" },
  //           { internalType: "address", name: "to", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "transferFrom",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "newOwner", type: "address" },
  //         ],
  //         name: "transferOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //     address: "0xbE56A66067E19bdF50F779EB35F029113cb75eD5",
  //     decimals: 18,
  //     image: {
  //       src: require("../../assets/images/DIAM.png"),
  //       label: "image",
  //     },
  //   },
  //   {
  //     asset: "DIAM (BEP20)",
  //     network: 1,
  //     abi: [
  //       { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  //       { inputs: [], name: "InvalidShortString", type: "error" },
  //       {
  //         inputs: [{ internalType: "string", name: "str", type: "string" }],
  //         name: "StringTooLong",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [],
  //         name: "EIP712DomainChanged",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "previousOwner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnershipTransferred",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [],
  //         name: "DOMAIN_SEPARATOR",
  //         outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "owner", type: "address" },
  //           { internalType: "address", name: "spender", type: "address" },
  //         ],
  //         name: "allowance",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "approve",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "account", type: "address" },
  //         ],
  //         name: "balanceOf",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           {
  //             internalType: "uint256",
  //             name: "subtractedValue",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "decreaseAllowance",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "eip712Domain",
  //         outputs: [
  //           { internalType: "bytes1", name: "fields", type: "bytes1" },
  //           { internalType: "string", name: "name", type: "string" },
  //           { internalType: "string", name: "version", type: "string" },
  //           { internalType: "uint256", name: "chainId", type: "uint256" },
  //           {
  //             internalType: "address",
  //             name: "verifyingContract",
  //             type: "address",
  //           },
  //           { internalType: "bytes32", name: "salt", type: "bytes32" },
  //           {
  //             internalType: "uint256[]",
  //             name: "extensions",
  //             type: "uint256[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "addedValue", type: "uint256" },
  //         ],
  //         name: "increaseAllowance",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //           { internalType: "bytes32", name: "_hash", type: "bytes32" },
  //           { internalType: "uint8", name: "_v", type: "uint8" },
  //           { internalType: "bytes32", name: "_r", type: "bytes32" },
  //           { internalType: "bytes32", name: "_s", type: "bytes32" },
  //           { internalType: "uint256", name: "deadline", type: "uint256" },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [{ internalType: "string", name: "", type: "string" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [{ internalType: "address", name: "owner", type: "address" }],
  //         name: "nonces",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "owner",
  //         outputs: [{ internalType: "address", name: "", type: "address" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "ownerNounce",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "owner", type: "address" },
  //           { internalType: "address", name: "spender", type: "address" },
  //           { internalType: "uint256", name: "value", type: "uint256" },
  //           { internalType: "uint256", name: "deadline", type: "uint256" },
  //           { internalType: "uint8", name: "v", type: "uint8" },
  //           { internalType: "bytes32", name: "r", type: "bytes32" },
  //           { internalType: "bytes32", name: "s", type: "bytes32" },
  //         ],
  //         name: "permit",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "renounceOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [{ internalType: "string", name: "", type: "string" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "to", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "transfer",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "from", type: "address" },
  //           { internalType: "address", name: "to", type: "address" },
  //           { internalType: "uint256", name: "amount", type: "uint256" },
  //         ],
  //         name: "transferFrom",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "address", name: "newOwner", type: "address" },
  //         ],
  //         name: "transferOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //     address: "0x2AE8F26fa20f415857D23D606701C53f68E4e4Da",
  //     decimals: 18,
  //     image: {
  //       src: require("../../assets/images/DIAM.png"),
  //       label: "image",
  //     },
  //   },
  //   {
  //     asset: "ETH",
  //     native: true,

  //     network: 2,
  //     abi: "",
  //     address: "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
  //     decimals: 18,
  //     image: {
  //       src: require("../../assets/images/eth.png"),
  //       label: "image",
  //     },
  //   },
  //   {
  //     asset: "BNB",
  //     native: true,

  //     network: 1,
  //     abi: "",
  //     address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
  //     decimals: 18,
  //     image: {
  //       src: require("../../assets/images/bnb.png"),
  //       label: "image",
  //     },
  //   },
  //   {
  //     asset: "TRX",
  //     network: 3,
  //     native: true,

  //     abi: "",
  //     address: "TYsbWxNnyTgsZaTFaue9hqpxkU3Fkco94a",

  //     decimals: 6,
  //     image: {
  //       src: require("../../assets/images/trx.png"),
  //       label: "image",
  //     },
  //   },
  // ],

  // networks: [
  //   {
  //     name: "Diamante testnet network",
  //     network: 0,
  //   },
  //   {
  //     name: "Binance testnet network",
  //     network: 1,
  //   },
  //   {
  //     name: "Ethereum testnet network",
  //     network: 2,
  //   },
  //   {
  //     name: "TRON testnet network",
  //     network: 3,
  //   },
  // ],
};
