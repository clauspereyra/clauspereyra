import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';
import Dropdown1 from './Dropdown1';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };
  

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };  

  return (
    <>
      <nav className='navbar1'>       
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Iniciar Sesión <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;