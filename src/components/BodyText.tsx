import { Flex, Text } from '@chakra-ui/react'

const BodyText = ({ title, body = '', ...rest }: { title: string; body?: string } & any) => {
  return (
    <Flex
      direction="column"
      gap="10px"
      width="100%"
      align="center"
      padding="0px 24px 0px 24px"
      {...rest}
    >
      <Text variant="main-title">{title}</Text>
      {body && (
        <Text
          variant="main-body"
          textAlign="center"
        >
          {body}
        </Text>
      )}
    </Flex>
  )
}

export default BodyText
