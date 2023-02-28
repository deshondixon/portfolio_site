// 1. import `NextUIProvider` component
// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  },
  colors: {
    // generic colors
    white: '#ffffff',
    black: '#000000',

    // background colors (light)
    background: '$white',
    backgroundAlpha: 'rgba(255, 255, 255, 0.8)', // used for semi-transparent backgrounds like the navbar
    foreground: '$black',
    backgroundContrast: '$white',

    //semantic colors (light)
    blue50: '#EDF5FF',
    // ...
    blue900: '#00254D',
    // ...

    // brand colors
    primaryLight: '$blue200',
    primaryLightHover: '$blue300', // commonly used on hover state
    primaryLightActive: '$blue400', // commonly used on pressed state
    primaryLightContrast: '$blue600', // commonly used for text inside the component
    primary: '$blue600',
    primaryBorder: '$blue500',
    primaryBorderHover: '$blue600',
    primarySolidHover: '$blue700',
    primarySolidContrast: '$white', // commonly used for text inside the component
    primaryShadow: '$blue500',

    // ... rest of colors (secondary, success, warning, error, etc)
  },
});

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
