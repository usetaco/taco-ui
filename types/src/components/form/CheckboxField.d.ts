import { FC } from 'react';
interface CheckboxFieldProps {
    label?: string;
    value: boolean | undefined;
    setValue: any;
    size?: string;
    disabled?: boolean;
    required?: boolean;
}
declare const CheckboxField: FC<CheckboxFieldProps>;
export default CheckboxField;
