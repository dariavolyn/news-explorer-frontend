import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className={`header header_page_${props.page}`}>
            <div className='header__content'>
                <h2 className={`header__logo header__logo_page_${props.page}`}>NewsExplorer</h2>
                <button
                    className={`button 
                    header__nav-mobile-button 
                    header__nav-mobile-button_page_${props.page}`}
                    onClick={props.onOpen}>
                </button>
                <Navigation
                    currentUser={props.currentUser}
                    handleRegisterOpen={props.handleRegisterOpen}
                    isLoggedIn={props.isLoggedIn}
                    isNavMobileOpen={props.isNavMobileOpen}
                    onAuth={props.onAuth}
                    closeNavMobile={props.closeNavMobile}
                    page={props.page}
                    signOut={props.handleSignOut}
                />
            </div>
        </header>
    )
}

export default Header;