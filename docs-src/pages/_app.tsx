import React from 'react'
import '../styles/globals.css'
import '../styles/fonts.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar, PageLayout, TacoTheme } from 'taco-labs-ui'
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
        <NavBar
          logoPath="/taco-ui/logo.png"
          showAuth={false}
          onClick={() => {
            router.push('/assessments')
          }}
        />
        <PageLayout loading={false}>
          <Component {...pageProps} />
        </PageLayout>
      </ChakraProvider>
    </>
  )
}

export default MainApp
