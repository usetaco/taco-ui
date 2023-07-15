import * as React from 'react';
import { FC } from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react';

interface LoadingWrapperProps {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingWrapper: FC<LoadingWrapperProps> = ({
  loading = true,
  children,
}) => {
  return (
    <>
      {loading ? (
        <Flex height="100%" width="100%" align="center" justify="center">
          <CircularProgress isIndeterminate size="100px" />
        </Flex>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrapper;
