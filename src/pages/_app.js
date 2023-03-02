import { motion } from 'framer-motion';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import './styles.css';
import React from 'react';

const links = [
  { name: 'Home', to: '#', id: 1 },
  { name: 'About', to: '#', id: 2 },
  { name: 'Blog', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
];

const theme = createTheme({
  type: 'dark',
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
    primarySolidContrast: '$white',
    primaryShadow: '$blue500',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <motion.aside>
      <div className='container'>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>

        {links.map(({ name, to, id }) => (
          <a key={id} href={to}>
            {name}
          </a>
        ))}
      </div>
    </motion.aside>
  );
}

export default MyApp;
