import React from 'react';
import './Menu.css';


import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Menu1() {
  return (
<div className="Menu1 item34">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">      
      <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/gateway">Gateway </NavDropdown.Item>
        <NavDropdown.Item href="/express">Express</NavDropdown.Item>
      </NavDropdown>
    </Nav>   
  </Navbar.Collapse> 
</Navbar>
</div>
);
}

export default Menu1;