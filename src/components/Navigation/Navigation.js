import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation(props) {
    const lightType = 'light';
    const history = useHistory();

    function signOut() {
        history.push('/');
    }

    return (

        <nav className='navigation'>
            <div className={`navigation_full navigation_full_${props.type}`}>
                <NavLink to='/' className={`link navigation__home navigation__home_${props.type}`}>Home</NavLink>
                { lightType === props.type && <button className='button navigation__saved-articles'>Saved articles</button>}
                { lightType === props.type
                    ? <button className='button navigation__exit' onClick={signOut}>{props.user}</button>
                    : <button className={`button navigation__signin navigation__signin_${props.type}`} onClick={props.onAuth}>Sign in</button>
                }
            </div>

            <div className={`navigation_mobile ${props.isNavMobileOpen ? 'navigation_mobile_is_open' : ''}`}>
                <button className="button navigation__close_mobile" onClick={props.onClose}></button>
                <div className="navigation_mobile-container">
                    <NavLink to='/' className="link navigation__home_mobile">Home</NavLink>
                    <button className="button navigation__signin_mobile" onClick={props.onAuth}>Sign in</button>
                </div>
            </div>
        </nav>

    )
}

export default Navigation;