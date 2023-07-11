
export const WalletTypes = {
  default: 0,
  metamask: 1,
  walletConnect: 2,
  coinbase: 3,
  phantom: 4,
  core: 5,
  glow: 6,
}

export const API_URL = "http://13.52.145.201:3000"
// export const API_URL = "http://localhost:5000"

export const INFURA_KEY="e632a702eec64a4d867d65d8923d4309"

export const TITLE_CONTRACT="0xE2842D4c279fa61e86E789A8dbdB217a297d02db"

export const PINATA_JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2OTZiNDE2ZC0wMjZiLTRjNzAtYTkwOS04ZjQyNTdjZWJmZGUiLCJlbWFpbCI6IndpbGxpYW0ucGFnZUBpbm5vdmF0ZW9kLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MmE2NDZiOTdkZjM0ODQ5MDA4NSIsInNjb3BlZEtleVNlY3JldCI6IjBjZDUyMmRhNmNhY2JmYmVkNDBmNTc4OTg5YzRmNGM5ZWZiZjRkZDA0YjRmZGJlMjIyM2E1ZDczNmExZTQ3OWUiLCJpYXQiOjE2ODgwMzc5Mjl9.9LgmN__50D_0i9BKU14-wdeNpLeCH_TmhadYMeuyn1o"

export const PINATA_API_KEY="42a646b97df348490085"

export const configNetwork = "mainnet";

export const holds_status_const = [
  "Car has a Lien to be Paid",
  "Car had a Registered Owner",
  "Car has a Title at Purchase",
  "Documents & Signed and In-state",
  "Correct Documents Signed by Dealer",
  "Bank sent the correct Title",
  "No balance is Due",
  "Correct Lienholer DMV Document",
];

export const Config = {
  ropsten: {
    etherscanLink: "https://ropsten.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "287b5d14c20f4b7d9411d165fac6a688",
  },
  mainnet: {
    etherscanLink: "https://etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "c7a95b91ffae44e3b7fb80d9fbb98939",
  },
  kovan: {
    etherscanLink: "https://kovan.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "e632a702eec64a4d867d65d8923d4309",
  },
  rinkeby: {
    etherscanLink: "https://rinkey.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "c7a95b91ffae44e3b7fb80d9fbb98939",
  },
};

export const getConfig = () => {
  return Config[configNetwork];
};

export const walletList = [
  {
    id:'metamask',
    name:'Metamask',
  },
  {
    id:'walletconnect',
    name:'WalletConnect',
  },
  {
    id:'coinbase',
    name:'CoinBase wallet',
  },
  {
    id:'phantom',
    name:'Phantom',
  },
  {
    id:'core',
    name:'Core',
  },
  {
    id:'glow',
    name:'Glow Wallet',
  },
]