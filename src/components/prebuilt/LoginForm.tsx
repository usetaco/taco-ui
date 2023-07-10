import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import TextField from '../form/TextField';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';

const LoginForm = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const signIn = () => {};

  return (
    <form>
      <Flex direction="column" gap={3}>
        <Text variant="title">{title || 'Login'}</Text>
        {subtitle && <Text variant="subtitle">{subtitle}</Text>}
        <TextField label="Email Address" value={email} setValue={setEmail} />
        <TextField label="Password" value={password} setValue={setPassword} />
        <PrimaryButton text="Login" onClick={signIn} />
        <Text variant="subtitle">or</Text>
        <SecondaryButton text="Forgot Password" onClick={signIn} />
      </Flex>
    </form>
  );
};

export default LoginForm;
