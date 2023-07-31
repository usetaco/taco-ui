import { EthereumClient } from '@web3modal/ethereum';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
export declare const metaMaskConnector: MetaMaskConnector;
export declare const coinBaseConnector: CoinbaseWalletConnector;
export declare const wagmiConfig: import("@wagmi/core").Config<import("@wagmi/core/dist/index-fc9ab085").P<import("viem").FallbackTransport>, import("@wagmi/core/dist/index-fc9ab085").W> & {
    queryClient: import("@tanstack/query-core").QueryClient;
};
export declare const ethereumClient: EthereumClient;
