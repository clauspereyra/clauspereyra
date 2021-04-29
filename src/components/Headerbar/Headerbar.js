import React from 'react';
import Navbar from './Navbar';
import './Headerbar.css';
import Home from './../../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicios from './../../pages/Servicios';
import Ventajas from './../../pages/Ventajas';
import Gateway from './../../pages/Gateway';
import Clientes from './../../pages/Clientes';
import Nosotros from './../../pages/Nosotros';
import Contacto from './../../pages/Contacto';
import Acceso from './../../pages/Acceso';
import Express from './../../pages/Express';

function Headerbar() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/servicios' component={Servicios} />
          <Route path='/ventajas' component={Ventajas} />
          <Route path='/gateway' component={Gateway} />
          <Route path='/clientes' component={Clientes} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/acceso' component={Acceso} />
          <Route path='/express' component={Express} />
        </Switch>
      </Router>
    </>
  );
}

export default Headerbar;