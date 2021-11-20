import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
    return (
        <div className='saved-news'>
            <Header
                isLoggedIn={props.isLoggedIn}
                isNavMobileOpen={props.isNavMobileOpen}
                onClose={props.onClose}
                onOpen={props.onOpen}
                page={props.page}
                handleSignOut={props.handleSignOut}
            />

            <SavedNewsHeader />

            <NewsCardList
                cards={props.cards}
                page={props.page}
                numberOfCards='1000'
            />

        </div >
    )
}

export default SavedNews;