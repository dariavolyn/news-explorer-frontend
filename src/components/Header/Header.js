import React from 'react';
import menuIconPath from '../../images/menu.svg';

function Header() {
    return (
        <div className="header">
            <h2 className="header-logo">NewsExplorer</h2>
            <button className="button header-mobile-menu">
                    <img src={menuIconPath} alt="Menu icon"></img>
                </button>
            <nav className="header-menu">
                <button className="button header-button-home">Home</button>
                <button className="button header-button-signin">Sign in</button>
            </nav>
        </div>
    )
}

export default Header;