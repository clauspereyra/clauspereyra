import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './CoinExpress.css';

const CoinSignup = ({ submitForm }) => {
  const { handleSubmit } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right-co'>
      <form onSubmit={handleSubmit} className='form-co' noValidate>
        
        <h1>Si sos cliente de COIN Gateway</h1>   
        <h2>ingresá aquí</h2>     

      </form>
    </div>
  );
};

export default CoinSignup;
