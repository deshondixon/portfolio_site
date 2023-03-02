import { Grid, Button, Container, Text } from '@nextui-org/react';
import Image from 'next/image';
import nicole from 'public/nicole.png';

export default function HomePage() {
  return (
    <>
      <Container className='p-3'>
        <div
          style={{
            zIndex: -1,
            position: 'fixed',
            width: '89vw',
          }}
        >
          <Image src={nicole} alt='art' objectFit='cover' />
        </div>
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
