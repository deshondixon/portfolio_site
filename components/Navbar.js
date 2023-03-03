import { Grid, Container, Button, Link, Text } from '@nextui-org/react';

export default function Navbar() {
  return (
    <Grid.Container gap={2} justify='center'>
      <Link href='/'>
        <Grid xs={12} md={6}>
          <Button rounded flat color='gradient' auto>
            About
          </Button>
        </Grid>
      </Link>
      <Link href='/cart'>
        <Grid xs={12} md={12}>
          <Text
            size={30}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight='bold'
          >
            Contact Me
          </Text>
        </Grid>
      </Link>
    </Grid.Container>
  );
}
