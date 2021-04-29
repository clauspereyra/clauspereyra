import React from 'react';
import './../App.css';
import './../components/Navbar.css'
import './Pages.css';

import LogosBox from './../components/LogosBox';
import Testimonials from './../components/Testimonials';
import Suscripcion from './../components/Suscripcion';



function Clientes() {
  return (
    <> 
      <LogosBox /> 
      <Testimonials />
      <Suscripcion />
    </>
  );
}

export default Clientes;