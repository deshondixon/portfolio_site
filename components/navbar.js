import { Navbar, Button, Link, Text, Grid, Switch } from '@nextui-org/react'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

export default function MainNavbar({ isDarkMode, onThemeChange }) {
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
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle color="gradient" aria-label="toggle navigation" />
        {/* <Grid.Container gap={2}>
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
        </Grid.Container> */}
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
  )
}
