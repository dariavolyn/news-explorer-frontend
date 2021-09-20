import React from 'react';
import About from '../About/About.js';
import SearchForm from '../SearchForm/SearchForm.js'


function Main(props) {
    return (
        <div className='main'>

            <div className="intro">
                <div className='intro__text'>
                    <h1 className='intro__title'>What's going on in the world?</h1>
                    <h2 className='intro__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
                    <SearchForm />
                </div>
            </div>

            <About />
        </div>
    )
}

export default Main;