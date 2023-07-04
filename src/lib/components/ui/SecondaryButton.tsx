import { Button, Flex, Text } from '@chakra-ui/react'

const SecondaryButton = ({ text, onClick }: { text: string; onClick: () => any }) => {
  return (
    <Button
      backgroundColor="secondary"
      color="white"
      fontSize="14px"
      fontWeight={400}
      px={3}
      _hover={{ backgroundColor: 'primary', color: 'white' }}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default SecondaryButton
