import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation(props) {
    const history = useHistory();

    function signOut() {
        history.push('/');
    }

    return (

        <nav className={`navigation navigation_page_${props.page} ${props.isNavMobileOpen ? 'navigation_is_open' : 'navigation_is_hidden'}`}>
            <div className={`navigation__menu navigation__menu_page_${props.page} ${props.isNavMobileOpen ? 'navigation__menu_is_open' : ''}`}>
                <button className={`button navigation__close navigation__close_page_${props.page}`} onClick={props.onClose}>+</button>
                <NavLink to='/' className={`link navigation__home navigation__home_page_${props.page}`}
                    exact activeClassName='navigation__home_active'>Home</NavLink>
                {props.page === 'saved-news' && <NavLink to='/saved-news'
                    className='button navigation__saved-articles'
                    exact activeClassName='navigation__saved-articles_active'>Saved articles</NavLink>}
                {props.page === 'saved-news'
                    ? <button className='button navigation__exit' onClick={signOut}>{props.user}</button>
                    : <NavLink to='/signin' className='link navigation__signin' onClick={props.onAuth}>Sign in</NavLink>
                }
            </div>
        </nav>

    )
}

export default Navigation;