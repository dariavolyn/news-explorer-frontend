import React from 'react';

function SuccessPopup(props) {
    return (
        <section className={`popup popup_type_success ${props.isOpen ? 'popup_is_open' : ''}`}>
            <div className='popup__container popup__container_type_success'>
                <button type='button' aria-label='close' className='button popup__close' onClick={props.onClose}></button>
                <h2 className='popup__title'>Registration successfully completed!</h2>
                <button onClick={props.openAuth} className='button popup__success-singin'>Sign in</button>
            </div>
        </section>
    )
}

export default SuccessPopup;