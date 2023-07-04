import { Button } from '@chakra-ui/react';

const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => any;
}) => {
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
