import { Box, Flex, Text } from '@chakra-ui/react'

const EnabledIndicator = ({ enabled }: { enabled: boolean }) => {
  return (
    <Flex
      align="center"
      gap="5px"
    >
      <Box
        height="20px"
        width="20px"
        backgroundColor={enabled ? '#11D400' : '#CECECE'}
        borderRadius="50%"
      />
      <Text
        fontSize="12px"
        fontWeight={400}
        color={enabled ? '#000' : '#636363'}
      >
        {enabled ? 'Active' : 'Disabled'}
      </Text>
    </Flex>
  )
}

export default EnabledIndicator
