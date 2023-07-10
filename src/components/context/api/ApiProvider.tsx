import React, { FC, createContext, useState } from 'react';
import { TacoApiClient } from '../../types/TacoApiClient';

export const ApiContext = createContext(
  {} as {
    tacoApiClient: TacoApiClient | undefined;
    setTacoApiClient: React.Dispatch<
      React.SetStateAction<TacoApiClient | undefined>
    >;
  }
);

interface TacoApiClientProviderProps {
  children: React.ReactNode;
}

const TacoApiClientProvider: FC<TacoApiClientProviderProps> = ({
  children,
}) => {
  const [tacoApiClient, setTacoApiClient] = useState<TacoApiClient | undefined>(
    undefined
  );

  return (
    <ApiContext.Provider
      value={{
        tacoApiClient,
        setTacoApiClient,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default TacoApiClientProvider;
