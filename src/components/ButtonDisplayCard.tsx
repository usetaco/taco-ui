import { Flex, Text } from '@chakra-ui/react'
import WidgetCard from './widget/WidgetCard'
import WidgetButton from './widget/WidgetButton'

const ButtonDisplayCard = ({
  title,
  body,
  buttonText,
  onClick,
}: {
  title: string
  body: string
  buttonText: string
  onClick: () => void
}) => {
  return (
    <WidgetCard>
      <Flex
        height="100%"
        width="100%"
        direction="column"
        align="center"
        gap="10px"
      >
        <Text variant="main-title">{title}</Text>
        <Text
          variant="main-body"
          textAlign="center"
        >
          {body}
        </Text>
        <WidgetButton
          onClick={onClick}
          text={buttonText}
        />
      </Flex>
    </WidgetCard>
  )
}

export default ButtonDisplayCard
