import React, { FC } from 'react';
import { TacoError } from '../../types/TacoError';
export declare const ErrorContext: React.Context<{
    error: TacoError | undefined;
    setError: React.Dispatch<React.SetStateAction<TacoError | undefined>>;
}>;
interface TacoErrorProviderProps {
    children: React.ReactNode;
}
declare const TacoErrorProvider: FC<TacoErrorProviderProps>;
export default TacoErrorProvider;
