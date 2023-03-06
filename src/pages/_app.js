import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import { createTheme, NextUIProvider } from '@nextui-org/react'

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

const Website = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default Website
