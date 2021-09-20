import React from 'react';
import { useHistory } from 'react-router-dom';

function PopupWithForm(props) {
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        history.push('/saved-news')
    }
    return (
        <>
            <div className={`popup popup__${props.type} ${props.isOpen ? 'popup_is_open' : ''}`}>
                <div className='popup__container'>
                    <button type='button' aria-label='close' className='button popup__close' onClick={props.onClose}></button>
                    <h2 className='popup__title'>{props.title}</h2>
                    <form className='popup__form' action='#'>
                        {props.children}
                        <button type='submit' value='submit' className='button popup__submit'  onSubmit={onSubmit}>{props.buttonText}</button>
                        <p className="popup__form_alt">or <button onClick={props.openAltForm} className='button popup__form_alt-link'>{props.altForm}</button></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PopupWithForm;