// import createWeb3ReactRoot from './Web3ReactManager';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import { NetworkContextName } from '@/uni/constants';

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);
const Providers: React.FC = ({ children }) => {
  function getLibrary(library: any) {
    return library;
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      ​
      {/* <Web3ProviderNetwork getLibrary={getLibrary}> */}
        ​{children}​
      {/* </Web3ProviderNetwork> */}
    </Web3ReactProvider>
  );
};

export default Providers;
