import { FC } from 'react';
interface LoginProps {
    onSubmit: (email: string, password: string) => void;
}
declare const LoginForm: FC<LoginProps>;
export default LoginForm;
