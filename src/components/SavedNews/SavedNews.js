import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {

    return (
        <div className='saved-news'>
            <Header
                isLoggedIn={props.isLoggedIn}
                isNavMobileOpen={props.isNavMobileOpen}
                closeNavMobile={props.closeNavMobile}
                onOpen={props.onOpen}
                page={props.page}
                handleSignOut={props.handleSignOut}
            />

            <SavedNewsHeader savedCards={props.savedCards}/>

            <NewsCardList
                handleDeleteArticle={props.handleDeleteArticle}
                savedCards={props.savedCards}
                page={props.page}
            />

        </div >
    )
}

export default SavedNews;