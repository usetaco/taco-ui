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
      backgroundColor="#6C757D"
      color="#fff"
      fontWeight={400}
      px={3}
      _hover={{ backgroundColor: '#000', color: '#fff' }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
