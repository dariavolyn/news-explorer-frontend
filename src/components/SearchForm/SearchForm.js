import React, { useState } from 'react';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function SearchForm(props) {

    return (
        <form className='search-form'>
            <input className='search-form__bar' type='text' id='search' placeholder='Enter topic' onChange={props.searchChange} />
            <button className='button search-form__submit' type='submit' value='Search' onClick={props.onSubmit}>Search</button>
        </form>
    )
}

export default SearchForm;