import React, { FC, createContext, useEffect, useState } from 'react'
import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

export const TacoWeb3Context = createContext({} as {})

interface TacoWeb3ProviderProps {
  children: React.ReactNode
}

const TacoWeb3Provider: FC<TacoWeb3ProviderProps> = ({ children }) => {
  const chains = [arbitrum, mainnet, polygon]
  const projectId = 'e89fcd051215810f8a2dbfcf4efe481e'

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

  const metaMaskConnector = new MetaMaskConnector({ chains })
  const coinBaseConnector = new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'taco-labs',
    },
  })

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [...w3mConnectors({ projectId, chains }), metaMaskConnector, coinBaseConnector],
    publicClient,
  })

  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <TacoWeb3Context.Provider value={{}}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal
        projectId={'e89fcd051215810f8a2dbfcf4efe481e'}
        ethereumClient={ethereumClient}
        themeVariables={{
          '--w3m-z-index': '9999999',
        }}
      />
    </TacoWeb3Context.Provider>
  )
}

export default TacoWeb3Provider
