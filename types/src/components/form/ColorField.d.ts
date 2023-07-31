import { FC } from 'react';
interface ColorFieldProps {
    label?: string;
    desc?: string;
    value: any;
    setValue: any;
    required?: boolean;
}
declare const ColorField: FC<ColorFieldProps>;
export default ColorField;
