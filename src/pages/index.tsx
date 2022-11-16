import styles from './index.less';

import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { Metamask } from '@/hooks/useWalletConnect';
import { wallet } from '@/hooks/moreWallet';
import useErc20 from '@/hooks/contract';
import { useEffect } from 'react';

function IndexPage() {
  const { account: address, chainId, activate, deactivate } = useWeb3React();

  useErc20();

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ul>
        <li>连接断开钱包</li>
        <li>连接钱包判断链</li>
        <li>连接钱包去签名</li>
      </ul>
      {address} -------- {chainId}
      <button
        onClick={() => {
          console.log(activate);
          activate(Metamask());
        }}
      >
        连接钱包
      </button>
      <button
        onClick={() => {
          activate(wallet());
        }}
      >
        连接钱包扫码
      </button>
      <button onClick={deactivate}>断开连接</button>
      <button>发起签名</button>
    </div>
  );
}

// 一般在layout 或者 router里面去配置
const App = () => {
  function getLibrary(library: any) {
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IndexPage />
    </Web3ReactProvider>
  );
};

export default App;
