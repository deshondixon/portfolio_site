import { Box, Container, Heading } from '@chakra-ui/react'
import { Avatar, Grid, Card, Text } from '@nextui-org/react'

const Page = () => {
  return (
    <Container>
      <Grid.Container gap={2} justify="left">
        <Grid>
          <Avatar
            zoomed
            squared
            src="deshon.png"
            css={{ size: '$36' }}
            justify="center"
          />
        </Grid>
        <Grid xs={6}>
          <Text
            weight="bold"
            h1
            css={{
              textGradient: '45deg, $yellow600 -0%, $red600 100%'
            }}
            size={30}
          >
            Hello, I&apos;m a Software developer based in Washington!
          </Text>
        </Grid>
      </Grid.Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            DeShon Dixon
          </Heading>
          <p>( Software Developer )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
