import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

const SectionHeader = ({ title, button }: { title: string; button?: ReactNode }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="100%"
      py={3}
      mt={2}
    >
      <Text variant="title">{title}</Text>
      {button && button}
    </Flex>
  )
}

export default SectionHeader
