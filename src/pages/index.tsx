import styles from './index.less';

import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import { Metamask } from '@/hooks/useWalletConnect';
import { wallet } from '@/hooks/moreWallet';
import useErc20 from '@/hooks/contract';
import { useEffect } from 'react';
import { Link } from 'umi';
import { Web3Provider } from '@ethersproject/providers';
import { useActiveWeb3React } from '@/hook/useActiveWeb3React';
import { ExternalProvider } from '@ethersproject/providers/src.ts/web3-provider';
// import { ethers } from 'ethers';

interface IProvider extends ExternalProvider {
  selectedAddress: string;
}

/**
 * 
 * @returns     connector?: AbstractConnector;
    library?: T;
    chainId?: number;
    account?: null | string;
    active: boolean;
    error?: Error;
 */

function IndexPage() {
  const {
    connector,
    account: address,
    chainId,
    activate,
    deactivate,
    active,
    library,
  } = useActiveWeb3React();

  useErc20();

  useEffect(() => {
    // const { provider } = new Web3Provider(window.ethereum as any);
    // console.log((provider as IProvider).selectedAddress,"---selectedAddress");

    // // 钱包之前有连接过并且没有手动断开连接
    // if ((provider as IProvider).selectedAddress) {
    //   activate(Metamask(), undefined, true).catch((error) => {
    //     activate(Metamask());
    //   });
    // }

    setTimeout(() => {
      const prov = window.ethereum as IProvider;
      console.log(prov.isStatus);
      
      if (prov.selectedAddress) {
        activate(Metamask(), undefined, true).catch((error) => {
          activate(Metamask());
        });
      }
    }, 100);
  }, []);

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
          activate(Metamask(), undefined, true).catch((error) => {
            activate(Metamask());
          });
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
      <Link to={`/uni`}>跳转uni</Link>
    </div>
  );
}

const Web3ReactRoot = createWeb3ReactRoot('NETWORK');

const Web3ProviderNetwork = ({ children, getLibrary }) => {
  return <Web3ReactRoot getLibrary={getLibrary}>{children}</Web3ReactRoot>;
};

function getLibrary(provider: any) {
  console.log(new Web3Provider(provider), '---new Web3Provider(provider)');

  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

// 一般在layout 或者 router里面去配置
const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <IndexPage />
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
};

export default App;
