import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-secondary p-4'>
      <ul className='flex'>
        <li className='mr-4'>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
