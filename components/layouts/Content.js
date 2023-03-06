import { Box, Container, Heading } from '@chakra-ui/react'
import { Avatar, Grid, Card, Text } from '@nextui-org/react'

export const Content = () => (
  <Container>
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Avatar
          zoomed
          squared
          src="deshon.png"
          css={{ size: '$36' }}
          justify="space-between"
        />
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $blue600 -20%, $purple600 50%'
          }}
          weight="bold"
        >
          DeShon Dixon
        </Text>
        <p>( Software Developer )</p>
      </Grid>
      <Grid xs={6}>
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $blue600 -20%, $purple600 50%'
          }}
          weight="bold"
        >
          Hello, I&apos;m a Software developer based in Washington!
        </Text>
      </Grid>
    </Grid.Container>
  </Container>
)
