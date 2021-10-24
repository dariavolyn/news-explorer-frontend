import React from 'react';

function SearchForm(props) {

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit(props.search);
    }

    return (
        <form className='search-form'>
            <input
                className='search-form__bar'
                type='text'
                id='search'
                placeholder='Enter topic'
                onChange={props.onChange}
                value={props.search} />
            <button className='button search-form__submit' type='submit' value='Search' onClick={onSubmit}>Search</button>
        </form>
    )
}

export default SearchForm;