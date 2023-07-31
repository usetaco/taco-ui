import { FC } from 'react';
interface SignupProps {
    onError: (error: any) => void;
    onSubmit: (email: string, password: string, passwordConfirm: string) => void;
    buttonText?: string;
}
declare const SignupForm: FC<SignupProps>;
export default SignupForm;
