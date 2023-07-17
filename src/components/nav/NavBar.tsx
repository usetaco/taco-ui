import * as React from 'react'
import { FC } from 'react'
import { Flex, Image } from '@chakra-ui/react'

interface NavBarProps {
  logoPath?: string
  navMenu?: React.ReactNode
  onClick: any
}

const NavBar: FC<NavBarProps> = ({ logoPath = '/logo.png', navMenu, onClick }) => {
  return (
    <Flex
      position="fixed"
      align="center"
      justify="space-between"
      width="100%"
      padding={3}
      pr={4}
      backgroundColor="#fff"
      zIndex={999}
    >
      <Image
        src={logoPath}
        width="auto"
        height="auto"
        maxHeight="50px"
        _hover={{ cursor: 'pointer' }}
        onClick={onClick}
      />

      {navMenu && navMenu}
    </Flex>
  )
}

export default NavBar
