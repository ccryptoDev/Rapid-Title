
export const WalletTypes = {
  default: 0,
  metamask: 1,
  walletConnect: 2,
  coinbase: 3,
  phantom: 4,
  core: 5,
  glow: 6,
}

export const API_URL = "http://54.177.112.127:3000";

export const INFURA_KEY="e632a702eec64a4d867d65d8923d4309"

export const TITLE_CONTRACT="0x7A26e95C1cF39f3Bc899D57475234165E9E507A2"

export const PINATA_JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5MzJiNzI3NC01MmZiLTQ0ZGUtOTQyMC1hMjkyZDI3MTdiNjYiLCJlbWFpbCI6ImxhZHRwcm9qZWN0c0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMTlkZWNhOWNkODUyMWMzMTNiYTgiLCJzY29wZWRLZXlTZWNyZXQiOiI5MGNhYzFhMTNlNDJlYjdiZDVhNzVmZDA5M2RlMTdiZTA5Y2UwMGY1M2IxYzVjYTAxYzgyYjM1ZGYxMGIyNzk2IiwiaWF0IjoxNjgyNTg4ODc3fQ.YBe6V6ec4jMIiaaFzujYcqFK8F0GpdEBK9n5mQgMOtI"

export const PINATA_API_KEY="19deca9cd8521c313ba8"

export const configNetwork = "mainnet";

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