import * as React from 'react';
import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import TextField from '../form/TextField';
import PrimaryButton from '../ui/PrimaryButton';

import { EMAIL_REGEX } from '../util/validation';

interface SignupProps {
  onError: (error: any) => void;
  onSubmit: (email: string, password: string, passwordConfirm: string) => void;
  buttonText?: string;
}

const SignupForm: FC<SignupProps> = ({
  onError,
  onSubmit,
  buttonText = 'Signup',
}) => {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>();

  const signUp = async () => {
    if (
      !password ||
      password.length === 0 ||
      !passwordConfirm ||
      passwordConfirm.length === 0
    ) {
      onError({
        title: 'Invalid Password',
        description: 'Please enter a valid password',
      });
    } else if (password !== passwordConfirm) {
      onError({
        title: 'Invalid Password',
        description: 'Password and Confirm Password do not match',
      });
    } else if (!email || email.length === 0) {
      onError({
        title: 'Invalid Email',
        description: 'Please enter a valid email',
      });
    } else {
      onSubmit(email, password, passwordConfirm);
    }
  };

  return (
    <form>
      <Flex direction="column" align="center" gap={4} width="100%">
        <Flex direction="column" align="center" width="50%" gap={4}>
          <TextField
            placeholder="Email Address"
            value={email}
            setValue={setEmail}
          />
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <TextField
            placeholder="Confirm Password"
            type="password"
            value={passwordConfirm}
            setValue={setPasswordConfirm}
          />
        </Flex>
        <Flex direction="column" align="center" width="50%" gap={3}>
          <PrimaryButton
            text={buttonText}
            onClick={signUp}
            disabled={
              (!email || email.length === 0) &&
              (!password || password.length === 0) &&
              (!passwordConfirm || passwordConfirm.length === 0)
            }
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default SignupForm;
