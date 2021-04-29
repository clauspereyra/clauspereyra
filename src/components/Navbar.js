import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import logo from './Headerbar/logo.png';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);   

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const closeMobileMenu1 = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }    
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }    
  };
  

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; 
  
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  }; 

  return (
    <>
      <nav className='navbar'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {<img src={logo} className="coinlogo" alt="logo" width="200" height="79"/>}
          </Link>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item home-page'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/gateway'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Soluciones <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/nosotros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Nosotros
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/clientes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Clientes
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/noticias'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Noticias
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contacto'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li> 
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/acceso'
              className='nav-links'
              onClick={closeMobileMenu1}
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