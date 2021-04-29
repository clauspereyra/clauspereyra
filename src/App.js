import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Gateway from './pages/Gateway';
import Clientes from './pages/Clientes';
import Nosotros from './pages/Nosotros';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';
import Acceso from './pages/Acceso';
import Express from './pages/Express';


import GlobalStyle from './globalStyles';

import Footer from './components/Footer';

function App() {
  return (<div className="App">
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        
        <Route path='/gateway' component={Gateway} />
        <Route path='/nosotros' component={Nosotros} />        
        <Route path='/clientes' component={Clientes} />
        <Route path='/noticias' component={Noticias} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/acceso' component={Acceso} />
        <Route path='/express' component={Express} />
      </Switch>
    </Router>

    <GlobalStyle />
    
    <Footer />
</>
</div>

  );
}

export default App;
