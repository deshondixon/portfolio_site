import { Link } from '@nextui-org/react';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <Link href='/'>About</Link>
      <Link href='/cart'>Contact Me</Link>
    </div>
  );
}
