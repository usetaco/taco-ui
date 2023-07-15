import { useContext } from 'react';
import { TacoWalletContext } from './TacoWalletProvider';

const useTacoWalletContext = () => useContext(TacoWalletContext);

export default useTacoWalletContext;
