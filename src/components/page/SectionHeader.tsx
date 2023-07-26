import * as React from 'react'
import { FC, ReactNode } from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface SectionHeaderProps {
  title: string
  button?: ReactNode
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, button }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="100%"
      py={3}
      mt={2}
    >
      <Text variant="subtitle">{title}</Text>
      {button && button}
    </Flex>
  )
}

export default SectionHeader
