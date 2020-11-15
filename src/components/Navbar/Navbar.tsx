import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMouseEnter = () => setIsModalVisible(true);

  const handleMouseLeave = () => setIsModalVisible(false);

  return (
    <header>
      <nav className='navbar__main-wrapper'>
        <a href='/#'>CompanyName</a>
        <input placeholder='Find features' />
        <div className='navbar__modal-wrapper'>         
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > 
            Feature #1  
          </button>
          {isModalVisible && (
            <aside 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}            
              className='navbar__modal'
            >
              <a href='/#'>
                Feature #1.1
              </a>
              <a href='/#'>
                Feature #1.2
              </a>
              <a href='/#'>
                Feature #1.3
              </a>
            </aside>
          )}
        </div>
        <a href='/#'>
          Log In
        </a>
        <a href='/#'>
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Navbar;