import { Content } from 'components/layouts/Content'
import { Box } from 'components/layouts/Box'

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%'
    }}
  >
    {children}
    <Content />
  </Box>
)
