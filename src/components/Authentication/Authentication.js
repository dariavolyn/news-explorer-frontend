import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormWithValidation } from '../../hooks/FormValidation.js';

function Authentication(props) {
    const { handleChange, isValid, resetForm } = useFormWithValidation({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const submitForm = (e) => {
        e.preventDefault();
        props.formSubmit(email, password);
        resetForm();
    }


    return (
        <PopupWithForm
            altFormLink={props.altFormLink}
            altFormTitle={props.altFormTitle}
            buttonText='Sign in'
            formSubmit={submitForm}
            isOpen={props.isOpen}
            isValid={isValid}
            title='Sign in'
            type='auth'
            openAltForm={props.openAltForm}
            onClose={props.onClose}
        >
            <h6 className='popup__input-title popup__input-title_type_email'>Email</h6>
            <input
                className='popup__input popup__input_type_email'
                maxLength='30'
                minLength='1'
                name='email'
                onChange={handleEmailChange}
                placeholder='Email'
                type='email'
                value={email}
            />
            <span className={`popup__error ${isValid === false && email !== ''  && 'popup__error_visible'}`}>Invalid email address</span>

            <h6 className='popup__input-title popup__input-title_type_password'>Password</h6>
            <input
                className='popup__input popup__input_type_password'
                maxLength='30'
                minLength='1'
                name='password'
                onChange={handlePasswordChange}
                placeholder='Enter password'
                type='text'
                value={password}
            />
            <span className={`popup__error ${!props.isLoginSuccess && email!== '' && password !=='' && 'popup__error_visible'}`}>Incorrect email or password</span>
        </PopupWithForm>
    )
}

export default Authentication;