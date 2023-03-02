import { Grid, Button, Container, Text } from '@nextui-org/react';

export default function HomePage() {
  return (
    <>
      <Container>
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
