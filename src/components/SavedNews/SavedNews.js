import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
    return (
        <div className='saved-news'>
            <Header type='light' user='Elise' />

            <SavedNewsHeader />

            <NewsCardList />
        </div>
    )
}

export default SavedNews;