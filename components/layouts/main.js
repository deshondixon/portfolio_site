import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <div>
      <Box as="main" pb={8}>
        <Head></Head>
      </Box>
    </div>
  )
}
