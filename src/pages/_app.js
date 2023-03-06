import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import Layout from 'components/layouts/main'

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      myColor: '#ff4ecd'
    },
    space: {},
    fonts: {}
  }
})

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <NextUIProvider theme={theme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </NextUIProvider>
    </ChakraProvider>
  )
}

export default Website
