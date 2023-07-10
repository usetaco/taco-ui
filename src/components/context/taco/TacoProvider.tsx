import React, { FC, createContext, useState } from 'react';
import TacoErrorProvider from '../error/ErrorProvider';
import { ChakraProvider } from '@chakra-ui/react';
import TacoApiClientProvider from '../api/ApiProvider';

export const TacoContext = createContext(
  {} as {
    tacoTheme: Object | undefined;
    setTacoTheme: React.Dispatch<React.SetStateAction<Object | undefined>>;
  }
);

interface TacoProviderProps {
  children: React.ReactNode;
}

const TacoProvider: FC<TacoProviderProps> = ({ children }) => {
  const [tacoTheme, setTacoTheme] = useState<Object | undefined>();

  return (
    <TacoContext.Provider
      value={{
        tacoTheme,
        setTacoTheme,
      }}
    >
      <ChakraProvider theme={tacoTheme}>
        <TacoApiClientProvider>
          <TacoErrorProvider>{children}</TacoErrorProvider>
        </TacoApiClientProvider>
      </ChakraProvider>
    </TacoContext.Provider>
  );
};

export default TacoProvider;
