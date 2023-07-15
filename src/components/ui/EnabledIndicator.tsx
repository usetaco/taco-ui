import * as React from 'react';
import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface EnabledIndicatorProps {
  enabled: boolean;
  statusText?: string;
}

const EnabledIndicator: FC<EnabledIndicatorProps> = ({
  enabled,
  statusText,
}) => {
  return (
    <Flex align="center" gap="5px">
      <Box
        height="20px"
        width="20px"
        backgroundColor={enabled ? '#11D400' : '#CECECE'}
        borderRadius="50%"
      />
      <Text
        fontSize="16px"
        fontWeight={400}
        color={enabled ? '#000' : '#636363'}
      >
        {statusText && statusText.length > 0
          ? statusText
          : enabled
          ? 'Active'
          : 'Disabled'}
      </Text>
    </Flex>
  );
};

export default EnabledIndicator;
