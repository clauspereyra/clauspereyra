import React from 'react';
import './../App.css';
import './../components/Navbar.css'
import './Pages.css';
import img1 from './../images/gateway.jpg';

import Icon1 from './../images/visa-logo.png';
import Icon2 from './../images/master-logo.png';
import Icon3 from './../images/amex-logo.png';
import Icon4 from './../images/cabal-logo.png';
import Icon5 from './../images/maestro-logo.png';


function Gateway() {
  return (
    <>      
      <div className='header-box'>
        <div className="item-box">
        <h1 className='title-item'>Gateway</h1>
        </div>
        <div className="item-box">
        <h4 className='subtitle-item'>COIN te permite procesar pagos online con tarjetas de crédito y débito, a través de múltiples adquirentes: First Data/FiServ, Prisma Medios de Pago, Red Link, con los números de establecimiento y reglas de negocios de tu empresa.</h4>
        </div>
      </div>

      <div className='content-box'>
        <div className="item-box1">
        <h2 className='title-item'>Ventajas</h2>
        <ul className='list-item1'>
          <li>Costo por transacción <span>Fijo y en Pesos.</span></li>
          <li>Usás tus propios <span>números de comercio. No intermediamos</span> en la recaudación de tu empresa.</li>
          <li>Seguridad: Certificación <span>PCI DSS v3.2</span></li>
          <li><span>Integración por API</span> con opciones de acuerdo a tu tienda</li>
          <li><span>Plugins</span> para integración con las principales plataformas ecommerce. Magento, Woo, Presta y Shopify.  (Vtex)</li>
          <li><span>Atención personalizada</span> por teléfono y mail.</li>
          <li><span>El nombre de tu empresa aparece en el resumen de tus clientes.</span> Así ellos individualizan fácilmente sus operaciones.</li>
        </ul>
        </div>
        <div className="item-box2">
        <h2 className='title-item'>Algunas funcionalidades</h2>
        <ul className='list-item1'>    

          <li>Envío de links de pago a múltiples clientes.</li>
          <li>Pagos en cuotas.</li>
          <li>Creación de Token para guardar datos de tarjetas</li>
          <li>Pagos 1-click.</li>
          <li>Pagos recurrentes / Suscripciones.</li>
          <li>3d secure.</li>
          
        </ul>
        </div>
      </div>

      <div className='back-box'>        
        <div className="item-back">
        <h4 className='back-item'>Procesamos transacciones con estos medios de pago:</h4>

        <img src={Icon1} alt="Logo" />;
        <img src={Icon2} alt="Logo" />;
        <img src={Icon3} alt="Logo" />;
        <img src={Icon4} alt="Logo" />;
        <img src={Icon5} alt="Logo" />;

        
        </div>
      </div>
      
      <div className='caja-box'>        
        <div className="item-caja">
        <h1 className='caja-item'>Forma de integración</h1>
        <img className="caja-img" src={img1} alt="Cobro Inmediato" />
        </div>
      </div>

      <div className='wrapper-box'>        
        <div className="item-wrapper">
        <h1 className='wrapper-item'>Planes</h1>
        </div>

        <div className="item-column1">
        <h2 className='column-title'>START</h2>
        <h5 className='column-text'>Para empresas que dan sus primeros pasos con un gateway de pagos</h5>
        </div>

        <div className="item-column2">
        <h2 className='column-title'>PLUS</h2>
        <h5 className='column-text'>Para empresas que desean automatizar sus cobros online y ofrecer promociones bancarias a sus clientes</h5>
        </div>

        <div className="item-column3">
        <h2 className='column-title'>FULL</h2>
        <h5 className='column-text'>Para corporaciones que buscan maximizar el potencial del gateway para optimizar su operación</h5>
        </div>

        <div className="item-column4">
        <h2 className='column-title'>ADVANCE</h2>
        <h5 className='column-text'>Para compañías que necesitan guardar los datos de tarjeta de sus cliente para Pagos 1-click o pagos recurrentes</h5>
        </div>


      </div>     


            
            
    </>
  );
}

export default Gateway;