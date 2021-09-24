import React from 'react';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import SearchForm from '../SearchForm/SearchForm.js'

function Main(props) {
    return (
        <main className='main'>

            <div className="intro">
                <div className='intro__text'>
                    <h1 className='intro__title'>What's going on in the world?</h1>
                    <h2 className='intro__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
                    <SearchForm isClicked={props.isClicked} onSearch={props.onSearch} />
                </div>
            </div>

            {props.isClicked && <NewsCardList
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />}

            <About />
        </main>
    )
}

export default Main;