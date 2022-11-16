// https://juejin.cn/post/6971703783868858382

import { InjectedConnector } from '@web3-react/injected-connector';
import NetworkConnector from '@/uni/newWork';

const MainChaid = 56;
export const NetworkContextName = 'NETWORK';
export const connectorLocalStorageKey = 'connectorId';
// 用来传给react-core 然后实现链接钱包
export const injected = new InjectedConnector({
  supportedChainIds: [MainChaid],
});

export const RPC = {
  56: 'https://bsc-dataseed4.binance.org',
};

export const NETWORK_CHAIN_ID: number = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? MainChaid.toString(),
);
export const network = new NetworkConnector({
  urls: {
    [NETWORK_CHAIN_ID]: 'https://bsc-dataseed1.defibit.io',
  },
});
