import {
  Container,
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
      <Col gap={1}>
        <Grid xs={12}>
          <Spacer />
        </Grid>
      </Col>
    </Grid.Container>
  </Container>
)
