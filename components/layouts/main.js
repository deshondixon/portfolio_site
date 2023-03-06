import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <div>
      <Box as="main" pb={8}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>DeShon Dixon - Homepage</title>
        </Head>
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </div>
  )
}

export default Main
