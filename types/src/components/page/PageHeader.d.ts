import { FC, ReactNode } from 'react';
interface PageHeaderProps {
    title: string;
    subtitle?: string;
    button?: ReactNode;
    showBorder?: boolean;
}
declare const PageHeader: FC<PageHeaderProps>;
export default PageHeader;
