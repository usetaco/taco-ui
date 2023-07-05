import * as React from 'react';
import { FC } from 'react';
import { Flex, Image } from '@chakra-ui/react';

interface NavBarProps {
  color: string;
}

const NavBar: FC<NavBarProps> = ({ color }) => {
  return (
    <Flex
      position="fixed"
      align="center"
      justify="space-between"
      width="100%"
      padding={2}
      backgroundColor="#fff"
    >
      <Image src="/logo.png" width="200px" height="auto" />
    </Flex>
  );
};

export default NavBar;
