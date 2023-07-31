import * as React from 'react';
import { FC } from 'react';
interface TacoCardProps {
    header?: string;
    footer?: React.ReactNode;
    children: React.ReactNode;
    rest: any;
}
declare const TacoCard: FC<TacoCardProps>;
export default TacoCard;
