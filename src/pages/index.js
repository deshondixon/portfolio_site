import Section from 'components/layouts/section'
import { Container, Avatar, Grid, Text } from '@nextui-org/react'

const Page = () => {
  return (
    <>
      <Container gap={2}>
        <Text
          h1
          size={41}
          css={{
            textGradient: '45deg, $blue600 -20%, $purple600 50%'
          }}
          weight="bold"
        >
          Hello, I&apos;m a Software developer based in Washington!
        </Text>
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Avatar zoomed src="deshon.png" css={{ size: '$40' }} />
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
            <Text size={15} weight="bold">
              ( Software Developer )
            </Text>
            <Section />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default Page
