import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar__wrapper'>
        <a href='?'>CompanyName</a>
        <div>
          <label htmlFor='search'>Search:</label>
          <input placeholder='e.g. prices' />
        </div>
        <span>Feature #1</span>
        <span>Feature #2</span>
        <button>Log In</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
};

export default Navbar;