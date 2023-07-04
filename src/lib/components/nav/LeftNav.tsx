import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { TacoMenuItem } from '../types/TacoMenuItem'
import TacoImage from './TacoImage'

const LeftNav = ({ menuItems = [] }: { menuItems?: TacoMenuItem[] }) => {
  return (
    <Flex
      direction="column"
      align="start"
      minHeight="100vh"
      height="100%"
      width="280px"
      pt={6}
      backgroundColor="#fff"
    >
      {menuItems.map((m: any, idx: number) => {
        return (
          <Link
            key={`left-nav-${idx}`}
            p={3}
            width="100%"
            variant="left"
            href={m.href}
            _hover={{ backgroundColor: '#4b4b4b', color: 'white' }}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Image
              src={m.icon}
              width="20px"
              height="20px"
              _hover={{ filter: `grayscale(100%)` }}
            />
            {m.label}
          </Link>
        )
      })}
    </Flex>
  )
}

export default LeftNav
