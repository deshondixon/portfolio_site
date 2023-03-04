import { Content } from 'components/Content';
import { Box } from 'components/Box';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    {children}
    <Content />
  </Box>
);
