import React from 'react';
import Navigation from '../Navigation/Navigation';


function Header(props) {
    return (
        <header className={`header header_page_${props.page}`}>
            <h2 className={`header__logo header__logo_page_${props.page}`}>NewsExplorer</h2>
            <button 
            className={`button header__nav-mobile-button header__nav-mobile-button_page_${props.page}`} 
            onClick={props.onOpen}>
            </button>
            <Navigation
                user={props.user}
                page={props.page}
                isNavMobileOpen={props.isNavMobileOpen}
                onAuth={props.onAuth}
                onClose={props.onClose}
            />
        </header>
    )
}

export default Header;