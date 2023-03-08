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
          </Grid>
          <Section delay={0.1}>
            <Text
              h2
              size={30}
              css={{
                textGradient: '45deg, $blue600 -20%, $purple600 50%'
              }}
              weight="bold"
            >
              {' '}
              Work{' '}
            </Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              rhoncus mattis rhoncus urna. Pellentesque adipiscing commodo elit
              at imperdiet. Aliquet nibh praesent tristique magna sit amet purus
              gravida quis. Diam vulputate ut pharetra sit amet. Laoreet non
              curabitur gravida arcu ac tortor dignissim convallis aenean.
              Sodales ut etiam sit amet nisl purus in mollis. Amet nisl purus in
              mollis nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus
              vitae congue. Cursus euismod quis viverra nibh cras. Id neque
              aliquam vestibulum morbi blandit cursus. Odio facilisis mauris sit
              amet. Purus in massa tempor nec feugiat.
            </p>
          </Section>
        </Grid.Container>
      </Container>
    </>
  )
}

export default Page
