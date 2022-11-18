import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { useEffect } from 'react';

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> {
  const context = useWeb3React<Web3Provider>();
  const contextNetwork = useWeb3React<Web3Provider>('NETWORK');

  console.log(context, 'context-----');

  console.log(contextNetwork, 'contextNetwork----');

  return context.active ? { ...context } : { ...contextNetwork };
}
