import { ethers } from 'ethers';
// 获取小狐狸是否连接
const provider = new ethers.providers.Web3Provider(window.ethereum);
// 这个之如果为null 就说明没有连接到小狐狸，如果有值就是连接的用户钱包地址
provider.provider.selectedAddress;


// 调用小狐狸钱包登录
const provider = new ethers.providers.Web3Provider(window.ethereum);
const accounts = await provider.send("eth_requestAccounts", []);
console.log(accounts[0]);


// 监听当前所链接，切换链接
const getChainId = async () => {
  //  Is it a primary link
  //  get chainId
  const chainId = ethereum.networkVersion;
  if (chainId !== "1") {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1",
            chainName: "rinkebyETH testnet",
          },
        ],
      })
      .catch((error) => {
        console.log(error);
      });

    await window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x1",
          },
        ],
      })
      .then(() => {
        handleSign();
        return;
      })
      .catch((e) => {
        console.log("wallet_switchEthereumChain error: ", e);
        return;
      })
      .finally(() => { });
  }
};

// 调用签名
var provider = new ethers.providers.Web3Provider(window["ethereum"]);
console.log("provider", provider);
var signer = await provider.getSigner();
console.log("signer", signer);


// 获取链上指定地址的账户余额
export async function abiGetBalance() {
  try {
    const pd = new ethers.providers.Web3Provider(window.ethereum);
    const bigBalance = await pd.getBalance('用户钱包地址');
    return formatNum(BigNumber(ethers.utils.formatEther(bigBalance)));
  } catch (error) {
    console.log(error)
  }
}

// 获取钱包头像

// npm i react-jazzicon

// import Jazzicon from "react-jazzicon";

// account 钱包地址
// <Jazzicon
//   diameter={10}
//   seed={parseInt(account.slice(2, 10), 16)}
// />