import { Text, Button, useStyleConfig } from '@chakra-ui/react'

const WidgetButton = ({ onClick, text, ...rest }: { onClick: any; text: string } & any) => {
  const widgetCardStyles = useStyleConfig('WidgetButton', { variant: 'main' })

  return (
    <Button
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      onClick={onClick}
      type="button"
      __css={widgetCardStyles}
      {...rest}
    >
      <Text variant="button-text">{text}</Text>
    </Button>
  )
}

export default WidgetButton
