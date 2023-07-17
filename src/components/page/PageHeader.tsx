import * as React from 'react'
import { FC, ReactNode } from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  button?: ReactNode
  showBorder?: boolean
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, button, showBorder = false }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="100%"
      mb={4}
      pb={showBorder ? 3 : 0}
      borderBottom={showBorder ? '1px solid #e1e1e1' : 'none'}
    >
      <Flex
        direction="column"
        gap={2}
      >
        <Text variant="title">{title}</Text>
        {subtitle && <Text variant="subtitle">{subtitle}</Text>}
      </Flex>
      {button && button}
    </Flex>
  )
}

export default PageHeader
