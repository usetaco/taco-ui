import { FC } from 'react';
interface NumberFieldProps {
    type?: 'integer' | 'currency' | undefined;
    label?: string;
    placeholder?: string;
    desc?: string;
    value: any;
    setValue: any;
    disabled?: boolean;
}
declare const NumberField: FC<NumberFieldProps>;
export default NumberField;
