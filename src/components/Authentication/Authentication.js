import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Authentication(props) {
    return (
        <PopupWithForm
            auth={props.auth}
            buttonText='Sign in'
            title='Sign in'
            type='auth'
            altForm='Sign up'
            isOpen={props.isOpen}
            onClose={props.onClose}
            openAltForm={props.openAltForm}
        >
            <h6 className='popup__input-title popup__input-title_type_email'>Email</h6>
            <input minLength='1' maxLength='30' type='text'
                className='popup__input popup__input_type_email' placeholder='Email' />
            <span className='popup__error'>Ivalid email address</span>

            <h6 className='popup__input-title popup__input-title_type_password'>Password</h6>
            <input minLength='1' maxLength='30' type='text'
                className='popup__input popup__input_type_password'
                placeholder='Enter password' />
        </PopupWithForm>
    )
}

export default Authentication;