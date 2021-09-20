import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js'

function NewsCardList(props) {
    return (
        <div className='news__card_list'>
            <ul className='news__card_list-grid'>
                <h3 className='news__card_list-title'>Search results</h3>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </ul>
            <button className='button news__card_show-more' type='button'>Show more</button>
        </div>
    )
}

export default NewsCardList;