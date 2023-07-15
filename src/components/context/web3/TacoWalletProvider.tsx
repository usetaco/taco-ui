import React, { FC, createContext, useEffect, useState } from 'react';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

export const TacoWalletContext = createContext(
  {} as {
    ethereumClient: EthereumClient | undefined;
    setEthereumClient: React.Dispatch<
      React.SetStateAction<EthereumClient | undefined>
    >;
  }
);

interface TacoWalletProviderProps {
  children: React.ReactNode;
}

const TacoWalletProvider: FC<TacoWalletProviderProps> = ({ children }) => {
  const [ethereumClient, setEthereumClient] = useState<
    EthereumClient | undefined
  >();
  const chains = [arbitrum, mainnet, polygon];
  const projectId = 'taco-labs';

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });

  useEffect(() => {
    const newEthereumClient = new EthereumClient(wagmiConfig, chains);
    setEthereumClient(newEthereumClient);
  }, [wagmiConfig]);

  return (
    <TacoWalletContext.Provider
      value={{
        ethereumClient,
        setEthereumClient,
      }}
    >
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    </TacoWalletContext.Provider>
  );
};

export default TacoWalletProvider;
