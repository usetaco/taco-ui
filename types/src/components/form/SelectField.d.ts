import { FC } from 'react';
import { TacoSelectOption } from '../types/TacoSelectOption';
interface SelectFieldProps {
    label: string;
    value: any;
    setValue: any;
    disabled?: boolean;
    options: TacoSelectOption[];
}
declare const SelectField: FC<SelectFieldProps>;
export default SelectField;
