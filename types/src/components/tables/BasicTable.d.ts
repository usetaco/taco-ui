import { FC } from 'react';
import { TacoDataColumn } from '../types/TacoDataColumn';
interface BasicTableProps {
    columns: TacoDataColumn[];
    data: any[];
    justify?: string;
}
declare const BasicTable: FC<BasicTableProps>;
export default BasicTable;
