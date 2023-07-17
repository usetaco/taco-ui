import React from 'react'
import { Card, CardBody, Code, Container, Flex, Link, Text } from '@chakra-ui/react'
import { PageHeader, TacoCard } from 'taco-labs-ui'

const HomePage = () => {
  return (
    <Container maxW="container.xl">
      <PageHeader
        title="Taco Labs UI"
        subtitle="Documentation & Examples"
        showBorder
      />
      <Flex
        direction="column"
        gap={4}
      >
        <Text variant="body">
          A React component library built on top of
          <Link
            mx={2}
            href="https://chakra-ui.com"
            target="blank"
          >
            Chakra UI
          </Link>
        </Text>
        <Text variant="body">
          This library provides base Typescript components for efficient React development. It's maintained by
          <Link
            mx={2}
            href="https://taco.xyz"
            target="blank"
          >
            Taco Labs
          </Link>
          for use in a variety of projects.
        </Text>
        <TacoCard
          label="Installation"
          body={
            <Flex
              direction="column"
              gap={4}
              pt={3}
            >
              <Flex
                direction="column"
                gap={3}
              >
                <Text variant="body">Install with your preferred package manager:</Text>
                <Flex
                  align="center"
                  gap={3}
                >
                  <Code children="npm i taco-labs-ui" />
                  <Code children="yarn add taco-labs-ui" />
                  <Code children="pnpm add taco-labs-ui" />
                </Flex>
              </Flex>
              <Flex
                direction="column"
                gap={3}
              >
                <Text variant="body">Then import components as you would normally.</Text>
                <Flex
                  direction="column"
                  gap={5}
                  p={4}
                  backgroundColor="#180946"
                  borderRadius="md"
                >
                  <Code
                    colorScheme="whiteAlpha"
                    backgroundColor="transparent"
                    children="import {PageHeader} from 'taco-labs-ui'"
                  />
                  <Flex direction="column">
                    <Code
                      colorScheme="whiteAlpha"
                      backgroundColor="transparent"
                      children="function YourComponent() {"
                    />
                    <Code
                      pl={4}
                      colorScheme="whiteAlpha"
                      backgroundColor="transparent"
                      children="return ("
                    />
                    <Code
                      pl={6}
                      colorScheme="whiteAlpha"
                      backgroundColor="transparent"
                      children='<PageHeader
                        title="Welcome to Taco"
                        showBorder
                      />'
                    />
                    <Code
                      pl={4}
                      colorScheme="whiteAlpha"
                      backgroundColor="transparent"
                      children=")"
                    />
                    <Code
                      colorScheme="whiteAlpha"
                      backgroundColor="transparent"
                      children="}"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          }
        />
      </Flex>
    </Container>
  )
}

export default HomePage
