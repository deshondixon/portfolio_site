import {
  Navbar,
  Button,
  Link,
  Text,
  Grid,
  Switch,
  useTheme
} from '@nextui-org/react'
import { Layout } from './Layout.js'
import Logo from 'components/layouts/logo'
import { SunIcon } from 'components/layouts/SunIcon'
import { MoonIcon } from 'components/layouts/MoonIcon'

export default function App({ isDarkMode, onThemeChange }) {
  const theme = useTheme()
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
                color="secondary"
                shadow
                checked={isDarkMode}
                size="xl"
                iconOn={<SunIcon filled />}
                iconOff={<MoonIcon filled />}
                onChange={onThemeChange}
                onClick={onThemeChange}
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
            <Button color="gradient" auto ghost href="#">
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
