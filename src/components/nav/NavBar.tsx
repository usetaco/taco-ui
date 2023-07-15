import * as React from 'react';
import { FC } from 'react';
import { Flex, Image, Link } from '@chakra-ui/react';

interface NavBarProps {
  logoPath?: string;
  showAuth?: boolean;
  authNav: any;
  onClick: any;
}

const NavBar: FC<NavBarProps> = ({
  logoPath = '/logo.png',
  showAuth = false,
  authNav,
  onClick,
}) => {
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
        width="200px"
        height="auto"
        _hover={{ cursor: 'pointer' }}
        onClick={onClick}
      />

      {showAuth ? (
        <>{authNav && authNav}</>
      ) : (
        <Flex align="center" gap={4}>
          <Link variant="menu" href="/login">
            Login
          </Link>
          <Link variant="menu" href="/signup">
            Signup
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
