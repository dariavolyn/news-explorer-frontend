import React from 'react';

function SearchForm() {
    return (
        <form className="search-form">
            <input className="search-bar" type="text" id="search" placeholder="Enter topic" />
            <input className="button search-submit" type="submit" value="Search" />
        </form>
    )
}

export default SearchForm;