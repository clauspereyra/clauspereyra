import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right-con'>
      <form onSubmit={handleSubmit} className='form-con' noValidate>
        
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Nombre y Apellido'
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
            placeholder='E-mail'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Asunto'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='textarea'
            name='password2'
            placeholder='Comentarios'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn-con' type='submit'>
          Enviar
        </button>
        <span className='form-input-login-con'>
        ¿Ya tienes una cuenta? Haga click <a href='#'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
