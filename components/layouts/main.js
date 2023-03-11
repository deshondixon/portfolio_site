import Head from 'next/head'
import Navbar from 'components/layouts/navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, isDarkMode, onThemeChange }) => {
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
        <Navbar isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </div>
  )
}

export default Main
