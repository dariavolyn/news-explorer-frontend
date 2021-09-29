import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Register(props) {
    return (
        <PopupWithForm
            register={props.register}
            buttonText='Sign up'
            title='Sign up'
            type='register'
            altForm='Sign in'
            isOpen={props.isOpen}
            onClose={props.onClose}
            openAltForm={props.openAltForm}
        >

            <h6 className='popup__input-title popup__input-title_type_email'>Email</h6>
            <input required minLength='1' maxLength='30' type='text'
                className='popup__input popup__input_type_email' placeholder='Email' />
            <span className='popup__error'>Invalid email address</span>

            <h6 className='popup__input-title popup__input-title_type_password'>Password</h6>
            <input required minLength='1' maxLength='30' type='text'
                className='popup__input popup__input-password'
                placeholder='Enter password' />

            <h6 className='popup__input-title popup__input_title_type_username'>Username</h6>
            <input required minLength='1' maxLength='30' type='text'
                name='username' className='popup__input popup__input_type_username' placeholder='Username' />
            <span className='popup__error'>This email is not available</span>

        </PopupWithForm >
    )
}

export default Register;
