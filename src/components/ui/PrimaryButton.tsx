import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
  text: string;
  onClick: () => any;
  disabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <Button
      backgroundColor="#000"
      color="#fff"
      _hover={{ backgroundColor: '#6C757D', color: '#fff' }}
      onClick={onClick}
      isDisabled={disabled}
      isLoading={loading}
      fontWeight={400}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
