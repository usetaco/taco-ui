import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface SecondaryButtonProps {
  text: string;
  onClick: () => any;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text, onClick }) => {
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
  );
};

export default SecondaryButton;
