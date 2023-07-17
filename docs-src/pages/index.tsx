import React from 'react'
import { Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { PageHeader } from 'taco-labs-ui'

const HomePage = () => {
  return (
    <Container
      mt="200px"
      py={5}
      maxW="container.xl"
    >
      <PageHeader
        title="Taco Labs UI Docs"
        subtitle="Documentation"
      />
    </Container>
  )
}

export default HomePage
