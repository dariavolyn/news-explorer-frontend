import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
    return (
        <div className='saved-news'>
            <Header 
            page={props.page}
            user='Elise' 
            isNavMobileOpen={props.isNavMobileOpen}
            onOpen={props.onOpen}
            onClose={props.onClose}
            />

            <SavedNewsHeader />

            <NewsCardList page={props.page} />
        </div >
    )
}

export default SavedNews;