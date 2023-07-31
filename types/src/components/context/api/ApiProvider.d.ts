import React, { FC } from 'react';
import { TacoApiClient } from '../../types/TacoApiClient';
export declare const ApiContext: React.Context<{
    tacoApiClient: TacoApiClient | undefined;
    setTacoApiClient: React.Dispatch<React.SetStateAction<TacoApiClient | undefined>>;
}>;
interface TacoApiClientProviderProps {
    children: React.ReactNode;
}
declare const TacoApiClientProvider: FC<TacoApiClientProviderProps>;
export default TacoApiClientProvider;
