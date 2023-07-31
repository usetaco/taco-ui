import * as React from 'react';
import { FC } from 'react';
import {
  Box,
  Flex,
  FormControl,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import FieldLabel from './FieldLabel';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { TacoSelectOption } from '../types/TacoSelectOption';

interface SelectFieldProps {
  label: string;
  value: any;
  setValue: any;
  disabled?: boolean;
  options: TacoSelectOption[];
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  value,
  setValue,
  disabled = false,
  options,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] =
    React.useState<TacoSelectOption>();

  React.useEffect(() => {
    let foundOption = options.find((o: any) => {
      return o.value === value;
    });
    if (foundOption) {
      setSelectedOption(foundOption);
    }
  }, [value]);

  return (
    <FormControl>
      {label && <FieldLabel title={label}></FieldLabel>}
      <Menu matchWidth>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Box}
              border="1px solid #e2e8f0"
              backgroundColor="white"
              px={3}
              py={2}
              borderRadius="md"
              _hover={{ cursor: 'pointer' }}
            >
              <Flex justify="space-between" align="center" width="100%">
                <Text variant="body">
                  {selectedOption?.value
                    ? selectedOption?.label
                    : options[0].label}
                </Text>

                <ChevronDownIcon
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  transition="200ms all ease"
                />
              </Flex>
            </MenuButton>
            <MenuList maxHeight="300px" overflowY="scroll" borderWidth="1px">
              {options &&
                options.map((o: any) => {
                  return (
                    <MenuItem
                      key={o.value}
                      onClick={() => {
                        setValue(o.value);
                        onClose();
                      }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Text variant="app-body" ml="12px">
                        {o.label}
                      </Text>
                    </MenuItem>
                  );
                })}
            </MenuList>
          </>
        )}
      </Menu>
    </FormControl>
  );
};

export default SelectField;
