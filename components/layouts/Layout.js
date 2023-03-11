import { Box } from 'components/layouts/Box'
import { Content } from 'components/layouts/Content'
import Navbar from 'components/layouts/navbar'
import Footer from './footer'

export const Layout = ({ children, router, isDarkMode, onThemeChange }) => (
  <Box
    css={{
      maxW: '100%'
    }}
  >
    {children}
    <Navbar isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
    <Content />
  </Box>
)
