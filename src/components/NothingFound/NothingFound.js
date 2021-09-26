import React from 'react';
import { NavLink } from 'react-router-dom';

function NothingFound() {
    return (
        <div className='nothing-found'>
            <h3 className='nothing-found__mesage'>Sorry, nothing was found!</h3>
            <NavLink to='/' className='link nothing-found__link'>Back to main</NavLink>
        </div>
    )
}

export default NothingFound;