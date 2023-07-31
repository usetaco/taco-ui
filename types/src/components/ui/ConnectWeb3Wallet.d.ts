import { FC } from 'react';
interface ConnectWeb3WalletProps {
    signWallet: any;
    saveWallet: any;
    onOpen: any;
    currentWallet?: string;
}
declare const ConnectWeb3Wallet: FC<ConnectWeb3WalletProps>;
export default ConnectWeb3Wallet;
