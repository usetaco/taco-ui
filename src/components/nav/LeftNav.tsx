import * as React from 'react';
import { FC } from 'react';
import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { TacoMenuItem } from '../types/TacoMenuItem';
import SecondaryButton from '../ui/SecondaryButton';

interface LeftNavProps {
  menuItems?: TacoMenuItem[];
  showLogout?: boolean;
  logoutOnClick: () => {};
}

const LeftNav: FC<LeftNavProps> = ({
  menuItems = [],
  showLogout = false,
  logoutOnClick,
}) => {
  return (
    <Flex
      direction="column"
      align="start"
      justify="space-between"
      minHeight="100vh"
      height="100%"
      width="280px"
      pt={7}
      backgroundColor="#fff"
      sx={{ position: 'relative !important' }}
    >
      <Flex direction="column" width="100%">
        {menuItems.map((m: any, idx: number) => {
          return (
            <Link
              key={`left-nav-${idx}`}
              p={3}
              width="100%"
              variant="left"
              href={m.href}
              _hover={{ backgroundColor: '#a3a3a3', color: 'white' }}
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
          );
        })}
      </Flex>
      {showLogout && (
        <Flex
          width="100%"
          p={3}
          justify="center"
          position="absolute"
          bottom={2}
          left={0}
        >
          <SecondaryButton
            fullWidth
            text={
              <Flex align="center" gap={3}>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8335 14.1666L18.0002 9.99998L13.8335 5.83331"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 10H8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text fontSize="14px" fontWeight={500} color="#fff">
                  Logout
                </Text>
              </Flex>
            }
            onClick={logoutOnClick}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default LeftNav;
