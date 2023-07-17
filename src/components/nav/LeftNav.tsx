import * as React from 'react'
import { FC } from 'react'
import { Box, Button, Collapse, Flex, IconButton, Link, Text } from '@chakra-ui/react'
import { TacoMenuItem } from '../types/TacoMenuItem'
import SecondaryButton from '../ui/SecondaryButton'
import TacoImage from '../ui/TacoImage'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const navVariants = {
  open: {
    width: 300,
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    width: 60,
    transition: {
      duration: 0.1,
    },
  },
}
interface LeftNavProps {
  menuItems?: TacoMenuItem[]
  showLogout?: boolean
  logoutOnClick?: () => {}
}

const LeftNav: FC<LeftNavProps> = ({ menuItems = [], showLogout = false, logoutOnClick }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(true)
  const [menusOpen, setMenusOpen] = React.useState<any>({})

  React.useEffect(() => {
    let newMenusOpen: any = {}
    menuItems.forEach((m: TacoMenuItem, idx: number) => {
      newMenusOpen[idx] = false
    })
    setMenusOpen(newMenusOpen)
  }, [menuItems])

  return (
    <Box sx={{ position: 'fixed !important', left: 0, top: 0 }}>
      <Flex
        as={motion.div}
        variants={navVariants}
        initial={menuOpen ? 'open' : 'closed'}
        animate={menuOpen ? 'open' : 'closed'}
        height="100vh"
        direction="column"
        align="end"
        justifyContent="space-between"
        padding={3}
        pt={8}
        backgroundColor="#fff"
        boxShadow="md"
      >
        <Flex
          width="100%"
          direction="column"
        >
          {menuItems.map((m: TacoMenuItem, idx: number) => {
            return (
              <Box key={`menu-${idx}`}>
                <Button
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  variant="ghost"
                  padding="8px"
                  onClick={() => {
                    if (m.subItems && m.subItems.length > 0) {
                      let newMenusOpen = menusOpen
                      newMenusOpen[idx] = !menusOpen[idx]
                      setMenusOpen(newMenusOpen)
                    } else {
                      m.onClick && m.onClick()
                    }
                  }}
                >
                  <Flex
                    align="center"
                    gap={3}
                  >
                    {m.icon && (
                      <TacoImage
                        src={m.icon}
                        width="20px"
                        height="20px"
                        _hover={{ filter: `grayscale(100%)` }}
                      />
                    )}
                    {menuOpen && <Text variant="subtitle">{m.label}</Text>}
                  </Flex>
                  {m.subItems && m.subItems.length > 0 && menuOpen && (
                    <ChevronDownIcon
                      transform={menusOpen[idx] ? 'rotate(0deg)' : 'rotate(180deg)'}
                      transition="200ms all ease"
                    />
                  )}
                </Button>

                {m.subItems && m.subItems.length > 0 && (
                  <Collapse
                    in={menusOpen[idx]}
                    animateOpacity
                  >
                    <Flex
                      direction="column"
                      gap="8px"
                      padding="6px 12px"
                    >
                      {m.subItems.map((s: any) => {
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            variant="menu"
                          >
                            {s.label}
                          </Link>
                        )
                      })}
                    </Flex>
                  </Collapse>
                )}
              </Box>
            )
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
                <Flex
                  align="center"
                  gap={3}
                >
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
                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#fff"
                  >
                    Logout
                  </Text>
                </Flex>
              }
              onClick={() => {
                logoutOnClick && logoutOnClick
              }}
            />
          </Flex>
        )}

        <IconButton
          aria-label="toggle menu"
          size="sm"
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <ChevronRightIcon
            transform={menuOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
            transition="200ms all ease"
          />
        </IconButton>
      </Flex>
    </Box>
  )
}

export default LeftNav
