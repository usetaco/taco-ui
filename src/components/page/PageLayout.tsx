import * as React from 'react'
import { FC } from 'react'
import { CircularProgress, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

interface PageLayoutProps {
  children: React.ReactNode
  loading?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({ children, loading = false }) => {
  return (
    <Grid
      width="100vw"
      templateColumns="1fr"
      minHeight="100vh"
      backgroundColor="#f4f4f4"
      py={5}
    >
      {loading ? (
        <GridItem>
          <Flex
            height="80vh"
            width="100%"
            align="center"
            justify="center"
          >
            <CircularProgress
              isIndeterminate
              size="100px"
              thickness="6px"
              color="primary"
            />
          </Flex>
        </GridItem>
      ) : (
        <GridItem>{children}</GridItem>
      )}
    </Grid>
  )
}

export default PageLayout
