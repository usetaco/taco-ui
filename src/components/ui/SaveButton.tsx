import * as React from 'react';
import { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface SaveButtonProps {
  text: string;
  onClick: () => any;
  disabled?: boolean;
  loading?: boolean;
}

const SaveButton: FC<SaveButtonProps> = ({
  text,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <Button
      backgroundColor="#00B012"
      type="submit"
      color="#ffff"
      fontWeight={400}
      _hover={{ backgroundColor: '#00B012', color: '#fff' }}
      onClick={onClick}
      isDisabled={disabled}
      isLoading={loading}
    >
      {text}
    </Button>
  );
};

export default SaveButton;
