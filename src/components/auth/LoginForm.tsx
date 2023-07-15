import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import TextField from '../form/TextField';
import PrimaryButton from '../ui/PrimaryButton';
import { FC } from 'react';

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const login = () => {
    if (email && password) {
      onSubmit(email, password);
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
            name="email"
          />
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            setValue={setPassword}
            name="password"
          />
        </Flex>
        <Flex direction="column" align="center" width="50%" gap={3}>
          <PrimaryButton
            text="Login"
            onClick={login}
            disabled={
              (!email || email.length === 0) &&
              (!password || password.length === 0)
            }
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default LoginForm;
