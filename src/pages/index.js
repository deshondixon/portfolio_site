import Section from 'components/layouts/section'
import Paragraph from 'components/layouts/paragraph'
import { Container, Avatar, Grid, Text, Link, Button } from '@nextui-org/react'

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
            <Paragraph>
              <Text p size={20}>
                DeShon Dixon is a software developer and Army Veteran offering a
                strong foundation in software development and programming
                principles across multiple platforms. Offers knowledge of
                authoring code derived from designing, building, and maintaining
                websites using scripting languages, content creation tools, and
                digital media. Demonstrated history of producing high-quality
                project results and possesses an innate talent for quickly
                mastering technology and new concepts.{' '}
              </Text>
              <Link href="https://www.linkedin.com/in/deshondixon/">
                <Text
                  h2
                  size={30}
                  css={{
                    textGradient: '45deg, $blue600 -20%, $purple600 50%'
                  }}
                  weight="bold"
                >
                  LinkedIn
                </Text>
              </Link>
            </Paragraph>
            <Box align="center" my={4}>
              <Link href="https://www.linkedin.com/in/deshondixon/">
                <Button ghost bordered color="gradient" auto>
                  My Portfolio
                </Button>
              </Link>
            </Box>
          </Section>
        </Grid.Container>
      </Container>
    </>
  )
}

export default Page
