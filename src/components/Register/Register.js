import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormWithValidation } from '../../hooks/FormValidation.js';

function Register(props) {
    const { handleChange, isValid, resetForm } = useFormWithValidation({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function handleEmailChange(e) {
        const value = e.target.value;
        handleChange(e);
        setEmail(value);
    }

    function handlePasswordChange(e) {
        const value = e.target.value;
        handleChange(e);
        setPassword(value);
    }

    function handleNameChange(e) {
        const value = e.target.value;
        handleChange(e);
        setName(value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.formSubmit(email, password, name);
        resetForm();
    }

    return (
        <PopupWithForm
            altFormLink={props.altFormLink}
            altFormTitle={props.altFormTitle}
            buttonText='Sign up'
            formSubmit={submitForm}
            isOpen={props.isOpen}
            isValid={isValid}
            openAltForm={props.openAltForm}
            onClose={props.onClose}
            title='Sign up'
            type='register'
        >

            <h6 className='popup__input-title popup__input-title_type_email'>Email</h6>
            <input minLength='1' maxLength='30' type='email' name='email'
                className='popup__input popup__input_type_email'
                placeholder='Email' onChange={handleEmailChange} value={email} />
            <span className={`popup__error ${isValid === false && email !== '' && 'popup__error_visible'}`}>Invalid email address</span>

            <h6 className='popup__input-title popup__input-title_type_password'>Password</h6>
            <input minLength='1' maxLength='30' type='text' name='password'
                className='popup__input popup__input-password'
                placeholder='Enter password' onChange={handlePasswordChange} value={password} />

            <h6 className='popup__input-title popup__input_title_type_username'>Username</h6>
            <input minLength='1' maxLength='30' type='text' name='username'
                className='popup__input popup__input_type_username'
                placeholder='Username' onChange={handleNameChange} value={name} />
            <span className='popup__error'>This email is not available</span>

        </PopupWithForm >
    )
}

export default Register;
