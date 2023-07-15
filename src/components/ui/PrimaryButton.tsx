import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { changeShade, getLightOrDark } from '../util/colors';

interface PrimaryButtonProps {
  color?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  fullWidth?: boolean;
  onClick: () => any;
  disabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  color = '#000',
  type = 'button',
  text,
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
}) => {
  let hoverColor: any;
  let fontColor: string;
  var fontLightOrDark = getLightOrDark(color);
  if (fontLightOrDark === 'light') {
    fontColor = '#000';
    hoverColor = changeShade(color, -30);
  } else {
    fontColor = '#fff';
    hoverColor = changeShade(color, 30);
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
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
