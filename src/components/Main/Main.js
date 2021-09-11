import React from 'react';
import SearchFrom from '../SearchForm/SearchForm.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';

function Main(props) {
    return (
        <div className="main-page">
            <div className="main">
                <div className="main-container">
                    <div className="main-title-container">
                        <h1 className="main-title">What's going on in the world?</h1>
                        <h2 className="main-subtitle">Find the latest news on any topic and save them in your personal account.</h2>
                    </div>
                    <SearchFrom />
                </div>
            </div>
            <NewsCardList />
        </div>
    )
}

export default Main;