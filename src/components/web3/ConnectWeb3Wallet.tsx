import * as React from 'react';
import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Web3Modal, useWeb3Modal } from '@web3modal/react';
import { EthereumClient } from '@web3modal/ethereum';

interface ConnectWeb3WalletProps {
  projectId: string;
  ethereumClient: EthereumClient;
  opener: React.ReactNode;
  onSuccess: any;
}

const ConnectWeb3Wallet: FC<ConnectWeb3WalletProps> = ({
  projectId,
  ethereumClient,
  opener,
  onSuccess,
}) => {
  const { open, close } = useWeb3Modal();

  return (
    <>
      <span onClick={() => open()}>{opener}</span>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default ConnectWeb3Wallet;
