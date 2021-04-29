import React, { useState } from 'react';
import './CoinExpress.css';
import FormSignup from './CoinSignup';
import FormSuccess from './CoinSuccess';

import background2 from './../../images/mod2.jpg';

const CoinExpress = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container-co' style={{ backgroundImage: `url(${background2})` }}>
        <div className='form-content-left-co'>

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        </div>
      </div>
    </>
  );
};

export default CoinExpress;
