import * as React from 'react';
import { FC } from 'react';
interface LoadingWrapperProps {
    loading: boolean;
    children: React.ReactNode;
}
declare const LoadingWrapper: FC<LoadingWrapperProps>;
export default LoadingWrapper;
