import React from 'react';
import SearchFrom from '../SearchForm/SearchForm.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import aboutPic from '../../images/about-pic.jpeg';

function Main(props) {
    return (
        <div className="main">

            <div className="intro">
                <div className="intro-container">
                    <div className="intro-title-container">
                        <h1 className="intro-title">What's going on in the world?</h1>
                        <h2 className="intro-subtitle">Find the latest news on any topic and save them in your personal account.</h2>
                    </div>
                    <SearchFrom />
                </div>
            </div>

            <NewsCardList />

            <div className="main-about">
                <img className="main-about-picture" alt="Author" src={aboutPic} />
                <div className="main-about-text">
                    <h3 className="main-about-title">About the author</h3>
                    <p className="main-about-info">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
                    <p className="main-about-info">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
                </div>
            </div>
        </div>
    )
}

export default Main;