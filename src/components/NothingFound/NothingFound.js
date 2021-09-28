import React from 'react';
import nothingFoundIconPath from '../../images/not-found_v1.svg';

function NothingFound(props) {
    return (
        <div className={`nothing-found ${props.isOpen ? '' : 'nothing-found_hide'}`}>
            <img className='nothing-found__icon' alt='Nothing found' src={nothingFoundIconPath}></img>
            <h3 className='nothing-found__title'>Nothing found</h3>
            <p className='nothing-found__message'>Sorry, but nothing matched your search terms.</p>
        </div>
    )
}

export default NothingFound;