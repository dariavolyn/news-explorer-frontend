import React from 'react';

function SearchForm() {
    return (
        <form className='search-form'>
            <input className='search-form__bar' type='text' id='search' placeholder='Enter topic' />
            <input className='button search-form__submit' type='submit' value='Search' />
        </form>
    )
}

export default SearchForm;