import React from 'react';
import { NavLink } from 'react-router-dom';
function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.type} ${props.isOpen ? 'popup_is_open' : ''}`}>
            <div className='popup__container popup__containter_type_form'>
                <button type='button' aria-label='close' className='button popup__close' onClick={props.onClose}></button>
                <h2 className='popup__title'>{props.title}</h2>
                <form noValidate className='popup__form' onSubmit={props.formSubmit}>
                    {props.children}
                    <button type='submit' value='submit' disabled={props.isValid === false && true}
                        className={`button popup__submit ${props.isValid === false && 'popup__submit_disabled'}`}
                    >{props.buttonText}</button>
                    <p className="popup__form-alt">or <NavLink
                        to={props.altFormLink}
                        onClick={props.openAltForm}
                        className='button popup__form-alt-link'>{props.altFormTitle}</NavLink>
                    </p>
                </form>
            </div>
        </section >
    )
}

export default PopupWithForm;