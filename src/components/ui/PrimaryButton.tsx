import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
  text: string;
  onClick: () => any;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      backgroundColor="primary"
      color="white"
      _hover={{ backgroundColor: 'secondary', color: 'white' }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
