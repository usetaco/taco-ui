import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function ImageFilter({
  fillColor = '#000',
  children,
  ...rest
}: { fillColor?: string; children: ReactNode } & any) {
  return (
    <Box
      sx={{ '&>svg': { fill: `${fillColor}!important` } }}
      {...rest}
    >
      {children}
    </Box>
  )
}
