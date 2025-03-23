import Link from 'next/link';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href='/menu'>MENU</Link>
      </li>
      <li>
        <Link href='/about'>ABOUT</Link>
      </li>
      <li>
        <Link href='/contact'>CONTACTS</Link>
      </li>
      <li>
        <Link href='/cart'>CART</Link>
      </li>
    </ul>
  );
};

export default Navbar;
