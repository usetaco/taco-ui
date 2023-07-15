import * as React from 'react';
import { FC } from 'react';
import { Checkbox, FormControl } from '@chakra-ui/react';

interface CheckboxFieldProps {
  label?: string;
  value: boolean | undefined;
  setValue: any;
  size?: string;
  disabled?: boolean;
  required?: boolean;
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  value,
  setValue,
  size = 'lg',
  disabled = false,
  required = false,
}) => {
  return (
    <FormControl>
      <Checkbox
        size={size}
        colorScheme="green"
        borderColor="#6C757D"
        isChecked={value || false}
        onChange={(e: any) => {
          setValue(e.target.checked);
        }}
        isDisabled={disabled}
        isInvalid={value !== undefined && required}
      >
        {label}
      </Checkbox>
    </FormControl>
  );
};

export default CheckboxField;
