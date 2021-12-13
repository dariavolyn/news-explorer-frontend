import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);

    function sortKeywords() {
        const keywords = props.savedCards.map((card) => {
            return card.keyword;
        })

        const sortedKeys = Array.from(new Set(keywords));
        return sortedKeys;
    };

    function getText() {
        const keys = sortKeywords();
        let text = '';

        if (keys.length === 1) {
            return text = keys[0];
        }
        if (keys.length === 2) {
            return text = `${keys[0]} and ${keys[1]}`;
        }
        if (keys.length === 3) {
            return text = `${keys[0]}, ${keys[1]} and ${keys[2]}`;
        }
        if (keys.length > 3) {
            return text = `${keys[0]}, ${keys[1]}, and ${(keys.length - 2)} others`;
        }
    }

    return (
        <div className='saved-news__text'>
            <h3 className='saved-news__title'>Saved articles</h3>
            <h2 className='saved-news__intro-amount'>{currentUser.username}, you have {props.savedCards.length} saved articles</h2>
            {props.savedCards.length > 0 && <p className='saved-news__keywords'> By keywords: <span style={{ fontWeight: 'bold' }}>{getText()}</span></p>}
        </div>
    )
}

export default SavedNewsHeader;