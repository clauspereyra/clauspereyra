import React from 'react';
import validate from './validateInfo';
import useForm from './useSuscripcion';
import './Suscripcion.css';

const SuscripcionSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right-su'>
      <form onSubmit={handleSubmit} className='form-su' noValidate>
        <h1>Suscripción<br/><span>a Nuestro Newsletter</span></h1>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Nombre'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        
        <button className='form-input-btn-su' type='submit'>
          Enviar
        </button>
        
      </form>
    </div>
  );
};

export default SuscripcionSignup;
