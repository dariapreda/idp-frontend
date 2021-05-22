import React, { useState } from 'react';
import './Form.scss';
import FormLogIn from './FormLogIn';
import FormSuccess from './FormSuccess';
import Footer from './Footer';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Form;