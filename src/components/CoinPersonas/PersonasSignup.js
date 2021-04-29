import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './CoinPersonas.css';
import img1 from './../../images/pay-1.png';

const CoinPersonas = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right2'>    

      <form onSubmit={handleSubmit} className='formss' noValidate>
        
        <h1>Si sos cliente de COIN Express y querés gestionar tus cobranzas</h1>
        <h2>ingresá aquí:</h2>

      </form>
    </div>
  );
};

export default CoinPersonas;
