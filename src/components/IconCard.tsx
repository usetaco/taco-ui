import { Box, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

const IconCard = ({
  title,
  subtitle,
  icon,
  groupHoverIcon = {},
  groupHoverText = {},
  ...rest
}: { title: string; subtitle: string; groupHoverIcon?: any; groupHoverText?: any; icon: ReactNode } & any) => {
  return (
    <Flex
      width="100%"
      align="center"
      gap="10px"
      //padding="8px 15px"
      {...rest}
    >
      <Box
        height="40px"
        width="40px"
      >
        <Flex
          height="40px"
          width="40px"
          align="center"
          justify="center"
          transition="200ms all ease"
          _groupHover={groupHoverIcon} //{{ filter: getFilterFromHex(theme.colors['widget-secondary']) }}
        >
          {icon}
        </Flex>
      </Box>

      <Flex
        direction="column"
        gap="2px"
      >
        <Text
          variant="card-title"
          _groupHover={groupHoverText} //{{ color: `${theme.colors['widget-secondary']} !important` }}
        >
          {title}
        </Text>
        <Text
          variant="card-subtitle"
          _groupHover={groupHoverText} //{{ color: `${theme.colors['widget-secondary']} !important` }}
        >
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  )
}

export default IconCard
