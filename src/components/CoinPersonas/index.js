import React, { useState } from 'react';
import './CoinPersonas.css';
import PersonasSignup from './PersonasSignup';
import PersonasSuccess from './PersonasSuccess';

import background1 from './../../images/mod1.jpg';

const CoinPersonas = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container' style={{ backgroundImage: `url(${background1})` }}>      
        <div className='form-content-left'>
        
        {!isSubmitted ? (
          <PersonasSignup submitForm={submitForm} />
        ) : (
          <PersonasSuccess />
        )}
        </div>        
      </div>
    </>
  );
};

export default CoinPersonas;
