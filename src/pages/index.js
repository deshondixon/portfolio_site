import React from 'react';
import { Navbar, Button, Link, Text, Card, Avatar } from '@nextui-org/react';
import { Layout } from 'components/Layout';
import { Logo } from 'components/Logo';
import { VariantsSelectorWrapper } from 'components/VariantsSelectorWrapper';

export default function App() {
  const [variant, setVariant] = React.useState('static');

  return (
    <Layout>
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          {' '}
          <Logo />
        </Navbar.Brand>
        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='#'>Projects</Navbar.Link>
          <Navbar.Link isActive href='#'>
            About
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button color='gradient' auto ghost as={Link} href='#'>
            Contact Me
          </Button>
        </Navbar.Content>
      </Navbar>
      <VariantsSelectorWrapper></VariantsSelectorWrapper>
    </Layout>
  );
}
