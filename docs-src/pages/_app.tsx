import '../styles/globals.css'
import '../styles/fonts.css'
import { Avatar, ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../layouts/main-layout'
import { NavBar, TacoProvider, TacoTheme } from 'taco-labs-ui'
import { LoadingProvider } from '../context/loading-context'
import { useRouter } from 'next/router'
import Head from 'next/head'

const tacoTheme = new TacoTheme('#008561', '#516E8', 'WorkSans')

function MainApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Taco Labs UI Docs</title>
      </Head>
      <ChakraProvider theme={tacoTheme.chakraTheme}>
        <LoadingProvider>
          <NavBar
            logoPath="/logo.png"
            showAuth={false}
            onClick={() => {
              router.push('/assessments')
            }}
          />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </LoadingProvider>
      </ChakraProvider>
    </>
  )
}

export default MainApp
