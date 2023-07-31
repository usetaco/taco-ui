import * as React from 'react'
import { FC } from 'react'
import { Flex, Text, Spinner, Collapse } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAccount, useConnect, useSignMessage } from 'wagmi'
import { verifyMessage } from 'ethers'
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import PrimaryButton from './PrimaryButton'

interface ConnectWeb3WalletProps {
  signWallet: any
  saveWallet: any
  onOpen: any
  currentWallet?: string
}

const ConnectWeb3Wallet: FC<ConnectWeb3WalletProps> = ({ signWallet, saveWallet, currentWallet, onOpen }) => {
  const [connectingWallet, setConnectingWallet] = useState<boolean>(false)
  const [connectedWallet, setConnectedWallet] = useState<string>('')
  const [savingWallet, setSavingWallet] = useState<boolean>(false)
  const [savedWallet, setSavedWallet] = useState<boolean>(false)
  const [signatureData, setSignatureData] = useState<any>()
  const [tacoError, setTacoError] = useState<string>()

  const { address, connector, isConnected } = useAccount()
  const { open, isOpen } = useWeb3Modal()
  const { connect, connectors, error: connectError, isLoading, pendingConnector } = useConnect()

  useEffect(() => {
    onOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (currentWallet && currentWallet.length > 0) {
      setConnectedWallet(currentWallet)
      setSavedWallet(true)
    }
  }, [currentWallet])

  const {
    data: signedMessage,
    error: signMessageError,
    isLoading: isLoadingSign,
    signMessage,
  } = useSignMessage({
    onSuccess(data, variables) {
      setSignatureData({ data, variables })
    },
    onError(data, error) {
      setConnectingWallet(false)
    },
  })

  useEffect(() => {
    if (signatureData?.data && signedMessage && !isLoadingSign) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(signatureData.variables.message, signatureData.data)
      onWalletSign(address, signatureData.data)
    }
  }, [signedMessage, isLoadingSign, signMessageError, signatureData])

  useEffect(() => {
    // user closed modal and connected wallet
    if (connectingWallet && !isOpen && address && address.length > 0) {
      setConnectedWallet(address)
      setConnectingWallet(false)
    }
    //user closed modal without connecting
    if (connectingWallet && !isOpen && !address) {
      setConnectingWallet(false)
    }
  }, [address, isOpen, connectingWallet])

  useEffect(() => {
    if (connectError) {
      setConnectingWallet(false)
      setTacoError(connectError.message)
    } else if (!connectError) {
      setTacoError('')
    }
  }, [connectError])

  const saveAndConnectWallet = async (walletAddress: any) => {
    setTacoError('')
    try {
      if (walletAddress && walletAddress.length) {
        const raw = await signWallet(walletAddress)
        signMessage({ message: raw })
      } else {
        setTacoError('No wallet found')
      }
    } catch (e: any) {
      console.log(e)
      setTacoError('Error connecting wallet')
    }
  }

  const onWalletSign = async (walletAddress: string, signature: string) => {
    try {
      await saveWallet(walletAddress, signature)
      setSavedWallet(true)
      setSavingWallet(false)
    } catch (e: any) {
      console.log(e)
      setTacoError('Error connecting wallet')
      setSavingWallet(false)
    }
  }

  return (
    <Flex
      direction="column"
      flexWrap={'wrap'}
      gap="12px"
      justifyContent={'center'}
      alignItems="center"
    >
      <Collapse in={!connectedWallet || connectedWallet.length === 0}>
        {connectingWallet ? <Spinner /> : <Web3Button />}
      </Collapse>
      <Collapse in={(connectedWallet && connectedWallet.length > 0) || false}>
        {savedWallet && !savingWallet ? (
          <>
            <Text
              fontSize="16px"
              textAlign="center"
              mb="10px"
            >
              Connected Wallet
            </Text>
            <Text
              fontSize="18px"
              textAlign="center"
            >
              {`${connectedWallet.substring(0, 25)}...`}
            </Text>
          </>
        ) : (
          <PrimaryButton
            text="Sign & Connect Wallet"
            loading={savingWallet}
            onClick={() => {
              setSavingWallet(true)
              saveAndConnectWallet(connectedWallet)
            }}
          />
        )}
      </Collapse>
      <Collapse in={(tacoError && tacoError.length > 0) || false}>
        <Text
          variant="main-body"
          textAlign="center"
          color="red.500"
        >
          {tacoError}
        </Text>
      </Collapse>
    </Flex>
  )
}

export default ConnectWeb3Wallet
