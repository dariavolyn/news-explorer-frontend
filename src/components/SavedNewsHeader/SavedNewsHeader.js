import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className='saved-news__text'>
            <h3 className='saved-news__title'>Saved articles</h3>
            <h2 className='saved-news__intro-amount'>{currentUser.username}, you have 5 saved articles</h2>
            <p className='saved-news__keywords'>By keywords: <span style={{ fontWeight: 'bold' }}>Nature, Yellowstone, and 2 other</span></p>
        </div>
    )
}

export default SavedNewsHeader;