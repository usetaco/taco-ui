import * as React from 'react'
import { FC } from 'react'
import {
  Box,
  Flex,
  FormControl,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import FieldLabel from './FieldLabel'
import { BlockPicker } from 'react-color'

interface ColorFieldProps {
  label?: string
  placeholder?: string
  desc?: string
  value: any
  setValue: any
  required?: boolean
}

const ColorField: FC<ColorFieldProps> = ({ label, placeholder, desc, value, setValue, required = false }) => {
  return (
    <FormControl>
      <Flex
        direction="column"
        gap="8px"
      >
        {label && (
          <FieldLabel
            title={required ? `${label} *` : label}
            subTitle={desc}
          />
        )}
        <Popover>
          <PopoverTrigger>
            <Flex
              align="center"
              gap="12px"
              _hover={{ cursor: 'pointer' }}
            >
              <Box
                height="25px"
                width="25px"
                borderRadius="50%"
                backgroundColor={value || '#fff'}
                border="1px solid #eee"
              ></Box>
              <Text variant="body">{value || placeholder ? placeholder : ''}</Text>
            </Flex>
          </PopoverTrigger>
          <PopoverContent width="auto">
            <PopoverArrow />
            <BlockPicker
              color={value}
              onChangeComplete={(newColor: any) => {
                setValue(newColor?.hex)
              }}
            />
          </PopoverContent>
        </Popover>
      </Flex>
    </FormControl>
  )
}

export default ColorField
