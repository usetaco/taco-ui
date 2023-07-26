import * as React from 'react'
import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface FieldLabelProps {
  title: string
  subTitle?: string
}

const FieldLabel: FC<FieldLabelProps> = ({ title, subTitle }) => {
  return (
    <Flex
      direction="column"
      gap="4px"
    >
      <Text
        variant="label"
        fontSize="14px"
        fontWeight={400}
      >
        {title}
      </Text>
      {subTitle && subTitle.length > 0 && <Text variant="callout">{subTitle}</Text>}
    </Flex>
  )
}

export default FieldLabel
