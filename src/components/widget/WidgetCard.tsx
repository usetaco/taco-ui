import { Box, useStyleConfig } from '@chakra-ui/react'
import { ReactNode } from 'react'

const WidgetCard = ({
  variant,
  narrow = false,
  onClick,
  children,
  ...rest
}: { variant: string; narrow?: boolean; onClick?: () => void; children: ReactNode } & any) => {
  const widgetCardStyles = useStyleConfig('WidgetCard', { variant })

  return (
    <Box
      onClick={onClick && onClick}
      boxShadow={variant === 'box-flat' ? '0' : '0px 0px 32px rgba(0, 0, 0, 0.15)'}
      padding={narrow ? '12px' : '12px 20px 16px 20px'}
      width="100%"
      __css={widgetCardStyles}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default WidgetCard
