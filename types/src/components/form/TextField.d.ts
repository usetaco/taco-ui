import { FC } from 'react';
interface TextFieldProps {
    type?: 'text' | 'password' | 'email' | undefined;
    label?: string;
    name?: string;
    placeholder?: string;
    desc?: string;
    value: any;
    setValue: any;
    disabled?: boolean;
    required?: boolean;
}
declare const TextField: FC<TextFieldProps>;
export default TextField;
