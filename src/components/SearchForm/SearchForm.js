import React from 'react';
import newsApi from '../../utils/NewsApi';

function SearchForm(props) {

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit();
    }

    return (
        <form className='search-form'>
            <input className='search-form__bar' type='text' id='search' placeholder='Enter topic' onChange={props.searchChange} />
            <button className='button search-form__submit' type='submit' value='Search' onClick={onSubmit}>Search</button>
        </form>
    )
}

export default SearchForm;