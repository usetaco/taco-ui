import * as React from 'react';
import { FC } from 'react';
interface NavBarProps {
    logoPath?: string;
    navMenu?: React.ReactNode;
    onClick: any;
}
declare const NavBar: FC<NavBarProps>;
export default NavBar;
