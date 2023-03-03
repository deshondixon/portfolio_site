import * as React from 'react';
import {
  Grid,
  Button,
  Container,
  Text,
  Link,
  NextUIProvider,
} from '@nextui-org/react';
import Navbar from 'components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container className='p-3'>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          DeShon Dixon Portfolio
        </Text>
        <Button rounded flat color='gradient' auto>
          Click me
        </Button>
      </Container>
    </>
  );
}
