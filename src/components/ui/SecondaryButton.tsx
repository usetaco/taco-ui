import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface SecondaryButtonProps {
  text: any;
  fullWidth?: boolean;
  onClick: () => any;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  text,
  fullWidth = false,
  onClick,
}) => {
  return (
    <Button
      backgroundColor="#6C757D"
      color="#fff"
      fontWeight={400}
      px={3}
      _hover={{ backgroundColor: '#000', color: '#fff' }}
      onClick={onClick}
      width={fullWidth ? '100%' : 'auto'}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
