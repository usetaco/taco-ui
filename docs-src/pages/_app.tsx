import React from 'react'
import '../styles/globals.css'
import '../styles/fonts.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar, PageLayout, TacoTheme, LeftNav } from 'taco-labs-ui'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { GrInstall } from 'react-icons/gr'

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
          logoPath={process.env.NODE_ENV === 'production' ? '/taco-ui/logo.png' : '/logo.png'}
          showAuth={false}
          onClick={() => {
            router.push('/assessments')
          }}
        />
        <PageLayout loading={false}>
          <LeftNav
            showLogout={false}
            menuItems={[
              {
                label: 'Getting Started',
                href: '/getting-started',
                icon: GrInstall,
                onClick: () => {
                  router.push('/getting-started')
                },
                subItems: [{ label: 'Installation', href: '/getting-started/installation' }],
              },
            ]}
          />
          <Component {...pageProps} />
        </PageLayout>
      </ChakraProvider>
    </>
  )
}

export default MainApp
