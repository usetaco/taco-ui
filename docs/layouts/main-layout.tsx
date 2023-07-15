import { CircularProgress, Container, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useLoading } from '../context/loading-context'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const { loading } = useLoading()
  const router = useRouter()
  const userToken = Cookies.get('_taco_token')

  useEffect(() => {
    setPageLoading(loading)
  }, [loading])

  return (
    <Grid
      width="100vw"
      templateColumns="1fr"
      minHeight="100vh"
      backgroundColor="#f4f4f4"
    >
      {pageLoading ? (
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

export default MainLayout
