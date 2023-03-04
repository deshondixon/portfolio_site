import { Box } from 'components/Box';
import * as React from 'react';
import {
  Card,
  Col,
  Grid,
  Button,
  Container,
  Text,
  Link,
  Spacer,
  Avatar,
  NextUIProvider,
} from '@nextui-org/react';

export const Content = () => (
  <>
    <Grid.Container gap={2} justify='center'>
      <Grid xs={12} md={6}>
        <Avatar size='xl' src='deshon.png' color='gradient' bordered />
        <Text
          h1
          size={45}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          DeShon Dixon
        </Text>
        <Text
          size='$lg'
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          gravida quis blandit turpis. Augue neque gravida in fermentum et
          sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
          Elementum tempus egestas sed sed risus pretium quam vulputate.
          Interdum velit euismod in pellentesque massa placerat duis ultricies.
        </Text>
      </Grid>
    </Grid.Container>
    <Spacer y={1} />
  </>
);
