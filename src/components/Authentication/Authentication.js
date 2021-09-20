import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Authentication(props) {
    return (
        <PopupWithForm 
        title='Sign in' 
        type='auth' 
        buttonText='Sign in' 
        altForm='Sign up' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        openAltForm={props.openAltForm}
        >
            <h6 className='popup__input_title popup__input_title-email'>Email</h6>
            <input minLength='1' maxLength='30' type='text'
                className='popup__input popup__input-email' placeholder='Email' />
            <span className='popup__error'>Ivalid email address</span>

            <h6 className='popup__input_title popup__input_title-password'>Password</h6>
            <input minLength='1' maxLength='30' type='text'
                className='popup__input popup__input-password popup__input-auth-password'
                placeholder='Enter password' />
        </PopupWithForm>
    )
}

export default Authentication;