import React from 'react';
function PopupWithForm(props) {
    return (
        <section className={`popup popup__${props.type} ${props.isOpen ? 'popup_is_open' : ''}`}>
            <div className='popup__container popup__containter_type_form'>
                <button type='button' aria-label='close' className='button popup__close' onClick={props.onClose}></button>
                <h2 className='popup__title'>{props.title}</h2>
                <form className='popup__form' action='#'>
                    {props.children}
                    <button type='submit' value='submit' className='button popup__submit' 
                    onClick={props.type === 'register' ? props.register : props.auth }>{props.buttonText}</button>
                    <p className="popup__form-alt">or <button onClick={props.openAltForm} className='button popup__form-alt-link'>{props.altForm}</button></p>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;