import * as React from 'react';
import { FC, ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface PageHeaderProps {
  title: string;
  button?: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ title, button }) => {
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
