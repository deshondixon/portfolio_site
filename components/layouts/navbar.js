import { Navbar, Button, Link, Text } from '@nextui-org/react'
import { Layout } from './Layout.js'
import Logo from 'components/layouts/logo'
import { Grid, Switch } from '@nextui-org/react'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

export default function App() {
  const collapseItems = [
    'About',
    'Contact',
    'Projects',
    'Experience',
    'Github',
    'LinkedIn',
    'Contact'
  ]

  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Navbar.Toggle color="gradient" aria-label="toggle navigation" />
          <Logo />
          <Grid.Container gap={2}>
            <Grid>
              <Switch
                checked={true}
                size="xl"
                color="success"
                icon={<NotificationIcon />}
              />
            </Grid>
          </Grid.Container>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link isActive href="#">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#"> Experience </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button color="gradient" auto ghost as={Link} href="#">
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: '100%'
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}
