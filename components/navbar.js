import {
  Navbar,
  Button,
  Link,
  Text,
  Grid,
  Switch,
  useTheme
} from '@nextui-org/react'
import { MainLayout } from './main'
import Logo from './logo'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

const MainNavbar = ({ isDarkMode, onThemeChange }) => {
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
    <MainLayout>
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
    </MainLayout>
  )
}

export default MainNavbar
