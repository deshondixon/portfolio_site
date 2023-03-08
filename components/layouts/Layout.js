import { Box } from 'components/layouts/Box'

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%'
    }}
  >
    {children}
  </Box>
)
