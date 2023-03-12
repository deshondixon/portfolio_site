import { Navbar, Button, Link, Text, Grid, Switch } from '@nextui-org/react'

export default function MainNavbar({}) {
  const collapseItems = [
    'About',
    'Contact',
    'My Portfolio',
    'Experience',
    'Github',
    'LinkedIn',
    'Contact'
  ]

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle color="gradient" aria-label="toggle navigation" />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="#">About</Navbar.Link>
        <Link href="/works">My Portfolio</Link>
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
