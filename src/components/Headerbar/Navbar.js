import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


import './Navbar.css';
import logo from './logo.png';

import Iniciarsesion from './Menu/Iniciarsesion';
import Soluciones from './Menu/Soluciones';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {<img src={logo} className="coinlogo" alt="logo" width="200" height="79"/>}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
                        
            <li className='nav-item'>
              <Soluciones />
            </li>            
            <li className='nav-item'>
              <Link
                to='/nosotros'
                className='nav-links'
                onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/clientes'
                className='nav-links'
                onClick={closeMobileMenu}>
                Clientes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ventajas'
                className='nav-links'
                onClick={closeMobileMenu}>
                Noticias
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>

            

            <li className='nav-item'>
              <Iniciarsesion />
            </li>
            
          </ul>          
        </div>
      </nav>
    </>
  );
}

export default Navbar;