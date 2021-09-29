import React, { useState } from 'react';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NothingFound from '../NothingFound/NothingFound.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js'

function Main(props) {
    const [search, setSearch] = useState('');
    const [isFound, setIsFound] = useState(false);
    const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        closeResults();

        setIsPreloaderOpen(true);

        setTimeout(() => {
            setIsPreloaderOpen(false);
            if (search === '') {
                setIsNothingFoundOpen(true);
            } else {
                setIsFound(true);
            }
        }, 1000)


    }

    function closeResults() {
        setIsNothingFoundOpen(false);
        setIsPreloaderOpen(false);
        setIsFound(false);
    }

    return (
        <main className='main'>

            <div className="intro">
                <div className='intro__text'>
                    <h1 className='intro__title'>What's going on in the world?</h1>
                    <h2 className='intro__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
                    <SearchForm searchChange={handleSearchChange} onSubmit={onSubmit} />
                </div>
            </div>

            {isFound && <NewsCardList
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />}

            <Preloader isOpen={isPreloaderOpen} />
            <NothingFound isOpen={isNothingFoundOpen} />

            <About />
        </main>
    )
}

export default Main;