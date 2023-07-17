import * as React from 'react'
import { FC } from 'react'
import { CircularProgress, Flex, Grid, GridItem } from '@chakra-ui/react'

interface PageLayoutProps {
  children: React.ReactNode
  loading?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({ children, loading = false }) => {
  return (
    <Grid
      templateColumns="1fr"
      width="100vw"
      minHeight="100vh"
      backgroundColor="#f4f4f4"
      gap={4}
      py={9}
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
