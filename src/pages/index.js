import * as React from 'react';
import {
  Card,
  Col,
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
      <Grid.Container gap={2} justify='center'>
        <Grid xs={12} md={6}>
          <Navbar />
        </Grid>
        <Grid xs={12} md={6}>
          <Text
            h1
            size={50}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight='bold'
          >
            DeShon Dixon Portfolio
          </Text>
        </Grid>
      </Grid.Container>
    </>
  );
}
