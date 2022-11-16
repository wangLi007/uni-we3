import { InjectedConnector } from '@web3-react/injected-connector';

enum NetworkChain {
  Mainnet = 1,
}

export const supportedChainIds = [
  NetworkChain.Mainnet, // 1
];

// 连接钱包
export const Metamask = () =>
  new InjectedConnector({
    supportedChainIds,
  });
