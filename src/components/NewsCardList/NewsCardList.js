import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <section className='news-list'>
            {props.page === 'main' && <h3 className='news-list__title'>Search results</h3>}

            {props.cards && <ul className='news-list__cards'>
                {props.cards.slice(0, props.numberOfCards).map((card) => (
                    <NewsCard
                        card={card}
                        date={card.publishedAt.toString()}
                        image={card.urlToImage}
                        isLoggedIn={props.isLoggedIn}
                        key={uuidv4()}
                        keyword={props.keyword}
                        link={card.url}
                        page={props.page}
                        search={props.search}
                        source={card.source.name}
                        onSave={props.onSave}
                        text={card.content}
                        title={card.title}
                    />))}
            </ul>}

            {props.page === 'main' &&
                <button
                    className='button news-list__show-more'
                    type='button'
                    onClick={props.showMore}>Show more</button>}
        </section>
    )
}

export default NewsCardList;