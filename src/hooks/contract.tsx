import { ethers } from 'ethers';

const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

// https://chainlist.org/zh 寻找可以使用的节点
const provider = new ethers.providers.JsonRpcProvider(
  // `https://mainnet.infura.io/v3/`,
  'https://eth-rpc.gateway.pokt.network',
);

async function useErc20() {
  let blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  
  let balance = await provider.getBalance("0x7B78fc460aB2b3B7f9275227483f80e3d7dcd890");
  console.log(balance);
  
  return { blockNumber };
}

export default useErc20;
