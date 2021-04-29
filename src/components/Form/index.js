import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

import background1 from './../../images/mod1.jpg';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container-con'>
        
        <div className='form-box-left-con' style={{ backgroundImage: `url(${background1})` }}>
          
          <h1>Para Adherirse al servicio o para mayor información. Completá el formulario</h1>
          <h4 className='subtitle-item'></h4>

        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
