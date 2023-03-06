import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
