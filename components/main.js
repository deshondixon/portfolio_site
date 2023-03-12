import { Box } from './Box'
import Content from './Content'
import MainNavbar from './navbar'

export default function Layout({ children, isDarkMode, onThemeChange }) {
  return (
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
}
