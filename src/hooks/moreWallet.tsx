// 支持更多钱包 扫码连接
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const wallet = () =>
  new WalletConnectConnector({
    rpc: {
      [1]: 'https://mainnet.infura.io/v3/',
    },
    bridge: 'https://bridge.walletconnect.org', //. 可换桥地址，这个服务可以自己部署的
    qrcode: true,
  });
