import * as React from 'react'
import { FC } from 'react'
import { Box, Card, CardBody, Text } from '@chakra-ui/react'

interface TacoCardProps {
  label?: string
  title?: string
  body: React.ReactNode
  footer?: React.ReactNode
}

const TacoCard: FC<TacoCardProps> = ({ label, title, body, footer }) => {
  return (
    <Card>
      <CardBody p={4}>
        {label && (
          <Text
            variant="callout"
            mb={3}
          >
            {label}
          </Text>
        )}
        {title && (
          <Text
            variant="subtitle"
            mb={3}
          >
            {title}
          </Text>
        )}
        {body}
        {footer && <Box>{footer}</Box>}
      </CardBody>
    </Card>
  )
}

export default TacoCard
