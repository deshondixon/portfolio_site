import React, { useState } from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import MainLayout from 'components/main.js'

const darkTheme = createTheme({
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

const lightTheme = createTheme({
  type: 'light',
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

export default function Website({ Component, pageProps, router }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <NextUIProvider theme={theme}>
      <MainLayout isDarkMode={isDarkMode} onThemeChange={handleThemeChange}>
        <Component {...pageProps} />
      </MainLayout>
    </NextUIProvider>
  )
}
