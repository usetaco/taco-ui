import React, { FC, createContext, useEffect, useState } from 'react';
import TacoErrorProvider from '../error/ErrorProvider';
import TacoApiClientProvider from '../api/ApiProvider';
import { TacoTheme } from '../../types/TacoTheme';

export const TacoContext = createContext(
  {} as {
    tacoTheme: TacoTheme | undefined;
    setTacoTheme: React.Dispatch<React.SetStateAction<TacoTheme | undefined>>;
  }
);

interface TacoProviderProps {
  theme: TacoTheme;
  children: React.ReactNode;
}

const TacoProvider: FC<TacoProviderProps> = ({ theme, children }) => {
  const [tacoTheme, setTacoTheme] = useState<TacoTheme | undefined>();

  useEffect(() => {
    setTacoTheme(theme);
  }, [theme]);

  return (
    <TacoContext.Provider
      value={{
        tacoTheme,
        setTacoTheme,
      }}
    >
      <TacoApiClientProvider>
        <TacoErrorProvider>{children}</TacoErrorProvider>
      </TacoApiClientProvider>
    </TacoContext.Provider>
  );
};

export default TacoProvider;
