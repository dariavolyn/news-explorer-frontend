import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <section className='news-list'>

            {props.page === 'main' && <h3 className='news-list__title'>Search results</h3>}
            <NewsCard
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />
            <NewsCard
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />
            <NewsCard
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />
            <NewsCard
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />
            <NewsCard
                page={props.page}
                isSaved={props.isSaved}
                onSave={props.onSave}
            />
            {props.page === 'main' && <button className='button news-list__show-more' type='button'>Show more</button>}
        </section>
    )
}

export default NewsCardList;