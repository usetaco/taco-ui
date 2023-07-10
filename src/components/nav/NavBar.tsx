import * as React from 'react';
import { FC } from 'react';
import { Flex, Image } from '@chakra-ui/react';

interface NavBarProps {
  color: string;
  onClick: any;
}

const NavBar: FC<NavBarProps> = ({ color, onClick }) => {
  return (
    <Flex
      position="fixed"
      align="center"
      justify="space-between"
      width="100%"
      padding={2}
      backgroundColor="#fff"
    >
      <Image
        src="/logo.png"
        width="200px"
        height="auto"
        _hover={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    </Flex>
  );
};

export default NavBar;
