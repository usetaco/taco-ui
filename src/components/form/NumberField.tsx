import * as React from 'react';
import { FC } from 'react';
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import FieldLabel from './FieldLabel';

interface NumberFieldProps {
  type?: 'integer' | 'currency' | undefined;
  label?: string;
  placeholder?: string;
  desc?: string;
  value: any;
  setValue: any;
  disabled?: boolean;
}

const NumberField: FC<NumberFieldProps> = ({
  type = 'integer',
  label,
  desc,
  placeholder,
  value,
  setValue,
  disabled = false,
}) => {
  return (
    <FormControl>
      <Flex direction="column" gap="8px">
        {label && <FieldLabel title={label} subTitle={desc} />}
        <InputGroup>
          {type === 'currency' && (
            <InputLeftElement pointerEvents="none">$</InputLeftElement>
          )}
          <Input
            type="number"
            name={label}
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
        </InputGroup>
      </Flex>
    </FormControl>
  );
};

export default NumberField;
