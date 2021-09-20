import React from 'react';
import Navigation from '../Navigation/Navigation';


function Header(props) {
    return (
        <div className={`header header_${props.type}`}>
            <h2 className={`header__logo header__logo_${props.type}`}>NewsExplorer</h2>
            <button className={`button header__nav-mobile-button header__nav-mobile-button_${props.type}`} onClick={props.onOpen}></button>
            <Navigation
                user={props.user}
                type={props.type}
                isNavMobileOpen={props.isNavMobileOpen}
                onAuth={props.onAuth}
                onClose={props.onClose}
            />
        </div>
    )
}

export default Header;