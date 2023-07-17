import React from 'react'
import { Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { PageHeader } from 'taco-labs-ui'

const HomePage = () => {
  return (
    <Container maxW="container.xl">
      <PageHeader
        title="Installation"
        subtitle="Getting Started"
        showBorder
      />
    </Container>
  )
}

export default HomePage
