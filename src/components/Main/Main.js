import React, { useState } from 'react';

import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

function Main(props) {
    const [search, setSearch] = useState('');
    const [numberOfCards, setNumberOfCards] = useState(3)

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function searchCards() {
        setNumberOfCards(3);
        props.searchCards(search);
    }

    function showMore() {
        setNumberOfCards(prevNumber => prevNumber + 3);
    }

    return (
        <main className='main'>

            <div className="intro">
                <div className='intro__text'>
                    <h1 className='intro__title'>What's going on in the world?</h1>
                    <h2 className='intro__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
                    <SearchForm onSubmit={searchCards} search={search} onChange={handleSearchChange} />
                </div>
            </div>

            <Preloader isOpen={props.isPreloaderOpen} />

            {props.cards && <NewsCardList
                cards={props.cards}
                keyword={props.keyword}
                isLoggedIn={props.isLoggedIn}
                numberOfCards={numberOfCards}
                page={props.page}
                setSavedCards={props.setSavedCards}
                savedCards={props.savedCards}
                search={search}
                showMore={showMore}
                handleSaveArticle={props.handleSaveArticle}
            />}

            <NothingFound isOpen={props.isNothingFoundOpen} />

            <About />
        </main>
    )
}

export default Main;