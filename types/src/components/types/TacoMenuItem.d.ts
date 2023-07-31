import { ReactNode } from 'react';
export type TacoMenuItem = {
    label: string;
    href: string;
    icon?: ReactNode | string;
    onClick?: () => {};
    subItems?: TacoMenuItem[];
};
