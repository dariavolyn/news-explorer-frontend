import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <nav className={`nav nav_page_${props.page}
         ${props.isNavMobileOpen ? 'nav_is_open' : 'nav_is_hidden'}`}>

            <div className={`nav__menu nav__menu_page_${props.page} 
            ${props.isNavMobileOpen ? 'nav__menu_is_open' : ''}`}>

                <button className={`button nav__close nav__close_page_${props.page}`}
                    onClick={props.closeNavMobile}>+</button>

                <NavLink to='/' className={`link nav__home nav__home_page_${props.page}`}
                    exact activeClassName='nav__home_active'>Home</NavLink>

                {props.isLoggedIn === false && <NavLink to='/signin' className='link nav__signin'
                    onClick={props.onAuth}>Sign in</NavLink>}

                {props.isLoggedIn === true &&
                    <>
                        <NavLink to='/saved-news' className={`button nav__saved-articles 
                            nav__saved-articles_page_${props.page}`}
                            exact activeClassName={`nav__saved-articles_active_page_${props.page}`}>Saved articles</NavLink>
                        <button className={`button nav__exit nav__exit_page_${props.page}`} onClick={props.signOut}>{currentUser.username}</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navigation;