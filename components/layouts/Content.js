import {
  Container,
  Avatar,
  Grid,
  Card,
  Text,
  Spacer,
  Row,
  Col
} from '@nextui-org/react'

export const Content = () => (
  <Container>
    <Grid.Container gap={2}>
      <Row gap={1}>
        <Col>
          <Grid xs={12}>
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
            <Grid xs={12}>
              <Avatar zoomed squared src="deshon.png" css={{ size: '$36' }} />
              <Spacer />
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
          </Grid>
        </Col>
      </Row>
    </Grid.Container>
  </Container>
)
