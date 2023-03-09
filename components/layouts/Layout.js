import { Box } from 'components/layouts/Box'
import { Content } from 'components/layouts/Content'

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
