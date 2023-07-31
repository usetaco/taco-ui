import * as React from 'react';
import { FC } from 'react';
interface PageLayoutProps {
    children: React.ReactNode;
    loading?: boolean;
}
declare const PageLayout: FC<PageLayoutProps>;
export default PageLayout;
