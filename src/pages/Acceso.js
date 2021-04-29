import React from 'react';
import '../App.css';
import CoinExpress from '../components/CoinExpress';
import CoinPersonas from '../components/CoinPersonas';


function Acceso() {
  return (
    <>      
      <div className='header-box'>
        <div className="item-box">
        <h1 className='title-item'>Acceso Clientes</h1>
        </div> 
      </div>

      <div className="content-box">
      <CoinExpress />  
      <CoinPersonas />   
      </div>
            
    </>
  );
}

export default Acceso;