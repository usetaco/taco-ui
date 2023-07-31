import { FC } from 'react';
interface CurrencyFieldProps {
    label?: string;
    desc?: string;
    placeholder?: string;
    value: any;
    setValue: any;
    disabled?: boolean;
}
declare const CurrencyField: FC<CurrencyFieldProps>;
export default CurrencyField;
