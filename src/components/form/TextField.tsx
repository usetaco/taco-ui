import * as React from 'react';
import { FC } from 'react';
import { Flex, FormControl, Input } from '@chakra-ui/react';
import FieldLabel from './FieldLabel';

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

const TextField: FC<TextFieldProps> = ({
  type = 'text',
  label,
  name,
  desc,
  placeholder,
  value,
  setValue,
  disabled = false,
  required = false,
}) => {
  return (
    <FormControl>
      <Flex direction="column" gap="8px">
        {label && (
          <FieldLabel title={required ? `${label} *` : label} subTitle={desc} />
        )}
        <Input
          type={type}
          name={name ? name : label}
          id={label}
          value={value || ''}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          isDisabled={disabled}
          placeholder={placeholder ? placeholder : label}
          size="md"
          variant="outline"
          fontWeight={400}
          fontFamily="WorkSans, sans-serif"
          backgroundColor="white"
          border="1px solid #CED4DA"
          px={3}
        />
      </Flex>
    </FormControl>
  );
};

export default TextField;
