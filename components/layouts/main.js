import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <div>
      <Box as="main" pb={8}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <Title>DeShon Dixon - Homepage</Title>
        </Head>
      </Box>
    </div>
  )
}
