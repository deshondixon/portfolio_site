import { Box } from 'components/layouts/Box'
import { Content } from 'components/layouts/Content'
import Navbar from 'components/layouts/navbar'

export const MainLayout = ({ children, router, isDarkMode, onThemeChange }) => (
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
