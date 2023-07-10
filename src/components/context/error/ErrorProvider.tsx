import React, { FC, createContext, useEffect, useState } from 'react';
import { TacoError } from '../../types/TacoError';
import { useToast } from '@chakra-ui/react';

export const ErrorContext = createContext(
  {} as {
    error: TacoError | undefined;
    setError: React.Dispatch<React.SetStateAction<TacoError | undefined>>;
  }
);

interface TacoErrorProviderProps {
  children: React.ReactNode;
}

const TacoErrorProvider: FC<TacoErrorProviderProps> = ({ children }) => {
  const [error, setError] = useState<TacoError | undefined>(undefined);
  const toast = useToast();

  useEffect(() => {
    if (error && error.errorCode > 0) {
      toast({
        title: error.errorTitle,
        description: error.errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default TacoErrorProvider;
