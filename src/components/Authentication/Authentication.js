import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormWithValidation } from '../FormValidation/FormValidation.js';

function Authentication(props) {
    const { handleChange, isValid, resetForm } = useFormWithValidation({})

    const submitForm = (e) => {
        e.preventDefault();
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
                minLength='1'
                maxLength='30'
                type='email'
                className='popup__input popup__input_type_email'
                placeholder='Email'
                onChange={handleChange}
                name='email'
            />
            <span className={`popup__error ${isValid === false && 'popup__error_visible'}`}>Ivalid email address</span>

            <h6 className='popup__input-title popup__input-title_type_password'>Password</h6>
            <input
                minLength='1'
                maxLength='30'
                type='text'
                className='popup__input popup__input_type_password'
                placeholder='Enter password'
                name='password'
                onChange={handleChange}
            />
        </PopupWithForm>
    )
}

export default Authentication;