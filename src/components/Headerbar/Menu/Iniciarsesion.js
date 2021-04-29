import React, { useState } from 'react';
import './Menu.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { toggleMenuOpen, menuOpen } from 'react';


function Menu1() {

  const [visible, setVisible] = useState(false)  

  const toggleMenuOpen = () => {
      setVisible(true)
  }
  const toggleMenuClose = () => {
      setVisible(false)
  }

  return (


<div className="Menu1 item33">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">  
    
    <NavDropdown 
        href="#projects"
        onMouseEnter={() => toggleMenuOpen(true) }
        onMouseLeave={() => toggleMenuClose(false) }
        onToggle={() => { window.location.href = '/acceso'}}
        show={menuOpen} title="Iniciar sesión" id="collasible-nav-dropdown"
        >
           
      
        <NavDropdown.Item href="https://secure.cobroinmediato.tech/vads-merchant/">COIN Gateway </NavDropdown.Item>
        <NavDropdown.Item href="https://www.pagospyme.com/empresas-pagospyme/">COIN Express</NavDropdown.Item>
      </NavDropdown>
    </Nav>   
  </Navbar.Collapse> 
</Navbar>
</div>
);
}

export default Menu1;