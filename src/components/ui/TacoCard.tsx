import * as React from 'react'
import { FC } from 'react'
import { Box, Card, CardBody } from '@chakra-ui/react'

interface TacoCardProps {
  header?: string
  footer?: React.ReactNode
  children: React.ReactNode
  rest: any
}

const TacoCard: FC<TacoCardProps> = ({ header, footer, children, ...rest }) => {
  return (
    <Card
      variant="outline"
      {...rest}
    >
      <CardBody p={4}>
        {children}
        {footer && <Box>{footer}</Box>}
      </CardBody>
    </Card>
  )
}

export default TacoCard
