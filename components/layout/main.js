import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-srr'
import VoxelDog from 'components/voxel-dog'
import Content from '../Content'
import MainNavbar from '../navbar'

export default function Layout({ children }) {
  return (
    <>
      {' '}
      <MainNavbar />
      <Box as="main" pb={8}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>DeShon Dixon - Homepage </title>
        </Head>
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
        <Content />
      </Box>
    </>
  )
}
