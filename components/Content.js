import {
  Container,
  Grid,
  Avatar,
  Text,
  Link,
  Button,
  Spacer,
  Row,
  Col
} from '@nextui-org/react'
import Section from './section'
import Paragraph from './paragraph'
import { Box } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'
import NoSsr from 'components/no-srr'
import VoxelDog from 'components/voxel-dog'

export default function Content() {
  return (
    <>
      <Container gap={4}>
        <Box align="center">
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
        </Box>
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Avatar
              color="gradient"
              bordered
              class="animate-pulse"
              pointer
              src="deshon.png"
              css={{ size: '$40' }}
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
            <Text size={15} weight="bold">
              ( Software Developer )
            </Text>
          </Grid>
          <Section delay={0.1}>
            <NoSsr>
              <VoxelDog />
            </NoSsr>
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
              <Link href="/works">
                <Button size="lg" ghost bordered color="gradient" auto>
                  My Portfolio
                </Button>
              </Link>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Text
              h1
              size={30}
              css={{
                textGradient: '45deg, $blue600 -20%, $purple600 50%'
              }}
              weight="bold"
            >
              Bio
            </Text>
            <Text size={20} weight="bold">
              <BioSection>
                <BioYear>1994</BioYear>
                Born in Ventura, California.
              </BioSection>
              <BioSection>
                <BioYear>2012</BioYear>
                Began freelance Video Editing.
              </BioSection>
              <BioSection></BioSection>
              <BioSection>
                <BioYear>2019</BioYear>
                Completed US Army service as a 91B Diesel Mechanic.
              </BioSection>
              <BioSection>
                <BioYear>2023</BioYear>
                Completed Code Fellows course for Advanced Software Development
                in Python.
              </BioSection>
            </Text>
          </Section>
        </Grid.Container>
      </Container>
    </>
  )
}
