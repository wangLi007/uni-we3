import {
  Web3ReactProvider,
  useWeb3React,
  createWeb3ReactRoot,
} from '@web3-react/core';
import { Metamask } from '@/hooks/useWalletConnect';
// const Web3ReactRoot = createWeb3ReactRoot('NETWORK');
import { wallet } from '@/hooks/moreWallet';
// import { Web3Provider } from '@ethersproject/providers';

function IndexPage() {
  const { account: address, chainId, activate, deactivate } = useWeb3React();

  return (
    <div>
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

// function getLibrary(provider: any) {
//   const library = new Web3Provider(provider);
//   library.pollingInterval = 15000;
//   return provider;
// }

// // @ts-ignore TYPE NEEDS FIXING
// const Web3ProviderNetwork = ({ children, getLibrary }) => {
//   return <Web3ReactRoot getLibrary={getLibrary}>{children}</Web3ReactRoot>;
// };

// function App({ Component, pageProps }: any) {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <Web3ProviderNetwork getLibrary={getLibrary}>
//         <IndexPage {...pageProps} />
//       </Web3ProviderNetwork>
//     </Web3ReactProvider>
//   );
// }

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
