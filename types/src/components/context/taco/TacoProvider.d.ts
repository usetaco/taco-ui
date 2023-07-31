import React, { FC } from 'react';
import { TacoTheme } from '../../types/TacoTheme';
export declare const TacoContext: React.Context<{
    tacoTheme: TacoTheme | undefined;
    setTacoTheme: React.Dispatch<React.SetStateAction<TacoTheme | undefined>>;
}>;
interface TacoProviderProps {
    theme: TacoTheme;
    children: React.ReactNode;
}
declare const TacoProvider: FC<TacoProviderProps>;
export default TacoProvider;
