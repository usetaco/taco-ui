import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const PageHeader = ({
  title,
  button,
}: {
  title: string;
  button?: ReactNode;
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="100%"
      padding={3}
      mb={2}
    >
      <Text variant="title">{title}</Text>
      {button && button}
    </Flex>
  );
};

export default PageHeader;
