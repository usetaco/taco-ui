import { FC } from 'react';
import { TacoMenuItem } from '../types/TacoMenuItem';
interface LeftNavProps {
    width?: number;
    menuItems?: TacoMenuItem[];
    showLogout?: boolean;
    logoutOnClick?: () => {};
}
declare const LeftNav: FC<LeftNavProps>;
export default LeftNav;
