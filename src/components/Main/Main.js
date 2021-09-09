import React from 'react';

function Main(props) {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-title-container">
                    <h1 className="main-title">What's going on in the world?</h1>
                    <h2 className="main-subtitle">Find the latest news on any topic and save them in your personal account.</h2>
                </div>
                <form className="main-search">
                    <input className="main-search-bar" type="text" id="search" placeholder="Enter topic" />
                    <input className="button main-search-submit" type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
}

export default Main;