import { Box } from './Box'
import Content from './Content'
import MainNavbar from './navbar'

export default function Layout({ children }) {
  return (
    <Box
      css={{
        maxW: '100%'
      }}
    >
      {children}
      <MainNavbar />
      <Content />
    </Box>
  )
}
