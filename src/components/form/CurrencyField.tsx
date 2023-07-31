import * as React from 'react';
import { FC } from 'react';
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';
import FieldLabel from './FieldLabel';
import { createNumberMask } from 'text-mask-addons';
import MaskedInput from 'react-text-mask';

interface CurrencyFieldProps {
  label?: string;
  desc?: string;
  placeholder?: string;
  value: any;
  setValue: any;
  disabled?: boolean;
}

const CurrencyField: FC<CurrencyFieldProps> = ({
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
          <InputLeftElement pointerEvents="none">$</InputLeftElement>
          <Input
            as={MaskedInput}
            mask={createNumberMask({
              prefix: '',
              suffix: '',
              includeThousandsSeparator: true,
              thousandsSeparatorSymbol: ',',
              allowDecimal: true,
              decimalSymbol: '.',
              decimalLimit: 2,
              requireDecimal: false,
              allowNegative: false,
              allowLeadingZeroes: false,
            })}
            placeholder={placeholder}
            isDisabled={disabled}
            value={value || ''}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          />
        </InputGroup>
      </Flex>
    </FormControl>
  );
};

export default CurrencyField;
