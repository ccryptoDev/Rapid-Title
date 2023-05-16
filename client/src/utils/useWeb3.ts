// import { ethers, BigNumber } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { INFURA_KEY,TITLE_CONTRACT } from './constants'
import titleContractABI from './titleContractABI.json';
import Web3 from 'web3';

let title_contract: any;
let nft_contract: any;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_KEY
    }
  }
};

const web3modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions // required
});

/** @return connecting to web3 via modal */
async function connectWeb3() {
  try {
    const connection = await web3modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();
    return connection
  } catch(err) {
    console.error(err)
    return false
  }
  
}

/** @return if browser is running MetaMask. */
function getMetaMaskInstalled() {
  return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
}

/** @return whether MetaMask connected successfuly. */
async function connectMetamask() {
  try {
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  } catch (err) {
    console.error(err);
    return false;
  }
}

/** @return the first `userAddress` from the list of connected addresses. */
async function getUserAddress() {
  try{
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts[0] || "";
  } catch(err) {
    console.error(err);
    return false;
  }
}

async function getAllTitles() {
  // @ts-ignore
  window.web3 = new Web3(window.ethereum);
  const contract = await new window.web3.eth.Contract(titleContractABI, TITLE_CONTRACT);
  const walletAddr = await getUserAddress();
  try {
    return await contract.methods.getAllTitlesList(walletAddr)
  } catch (err) {
    console.log(err)
    return false
  }
}

async function mintTitle(vehicleCID: string, dealerID: number ,lenderID: number,sellerID: number) {
   // @ts-ignore
   window.web3 = new Web3(window.ethereum);
   const contract = await new window.web3.eth.Contract(titleContractABI, TITLE_CONTRACT);
   const walletAddr = await getUserAddress();
   try {
     return await contract.methods.mintTitle(walletAddr,vehicleCID,dealerID,lenderID,sellerID).send({
      from: walletAddr
     })
   } catch (err) {
     console.log(err)
     return false
   }
}

export { 
  connectWeb3, 
  getUserAddress, 
  getMetaMaskInstalled, 
  connectMetamask,
  mintTitle,
  getAllTitles,
};
