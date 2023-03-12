import { Box } from '@nextui-org/react'
import Content from './Content'
import MainNavbar from './navbar'

export default function MainLayout({ children, isDarkMode, onThemeChange }) {
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
