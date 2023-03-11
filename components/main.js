import { Box } from './Box'
import { Content } from './Content'
import { MainNavbar } from './navbar'

const MainLayout = ({ children, isDarkMode, onThemeChange }) => (
  <Box
    css={{
      maxW: '100%'
    }}
  >
    {children}
    <MainNavbar isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
    <Content />
  </Box>
)

export default MainLayout
