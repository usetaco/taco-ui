import * as React from 'react'
import { Button } from '@chakra-ui/react'
import { changeShade, getLightOrDark } from '../util/colors'
import PropTypes from 'prop-types'

const PrimaryButton = ({
  color = '#000',
  type = 'button',
  text,
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
  ...rest
}: any) => {
  let hoverColor: any
  let fontColor: string
  var fontLightOrDark = getLightOrDark(color)
  if (fontLightOrDark === 'light') {
    fontColor = '#000'
    hoverColor = changeShade(color, -30)
  } else {
    fontColor = '#fff'
    hoverColor = changeShade(color, 30)
  }

  return (
    <Button
      backgroundColor={color}
      color={fontColor}
      type={type}
      fontWeight={400}
      _hover={{ backgroundColor: hoverColor, color: fontColor }}
      onClick={onClick}
      isDisabled={disabled}
      isLoading={loading}
      width={fullWidth ? '100%' : 'auto'}
      {...rest}
    >
      {text}
    </Button>
  )
}

PrimaryButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  text: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: () => PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rest: PropTypes.any,
}

declare const PrimaryButton: React.FC<PropTypes.InferProps<typeof PrimaryButton.propTypes>>

export default PrimaryButton
