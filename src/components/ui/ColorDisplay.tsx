import * as React from 'react'
import { FC } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

interface ColorDisplayProps {
  color?: string
}

const ColorDisplay: FC<ColorDisplayProps> = ({ color }) => {
  return (
    <Flex
      align="center"
      gap="12px"
    >
      <Box
        height="25px"
        width="25px"
        borderRadius="50%"
        backgroundColor={color || '#fff'}
        border="1px solid #eee"
      ></Box>
      <Text variant="body">{color || ''}</Text>
    </Flex>
  )
}

export default ColorDisplay
