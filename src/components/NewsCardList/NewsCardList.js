import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className='news-list'>
            {props.page === 'main' && <h3 className='news-list__title'>Search results</h3>}

            {props.cards && props.page === 'main' && <ul className='news-list__cards'>
                {props.cards.slice(0, props.numberOfCards).map((card, index) => (
                    <NewsCard
                        date={card.publishedAt.toString()}
                        image={card.urlToImage}
                        isLoggedIn={props.isLoggedIn}
                        keyword={props.keyword}
                        key={index}
                        link={card.url}
                        page={props.page}
                        source={card.source.name}
                        handleSaveArticle={props.handleSaveArticle}
                        text={card.content}
                        title={card.title}
                        owner={currentUser._id}
                        savedCards={props.savedCards}
                        setSavedCards={props.setSavedCards}
                    />))}
            </ul>}

            {props.page === 'main' &&
                <button
                    className='button news-list__show-more'
                    type='button'
                    onClick={props.showMore}>Show more</button>}

            {props.savedCards && props.page === 'saved-news' && <ul className='news-list__cards'>
                    {props.savedCards.map((card, index) => (
                        <NewsCard
                            id={card._id}
                            key={index}
                            date={card.date}
                            image={card.image}
                            isLoggedIn={props.isLoggedIn}
                            keyword={card.keyword}
                            link={card.url}
                            page={props.page}
                            source={card.source}
                            onSave={props.onSave}
                            text={card.text}
                            title={card.title}
                            owner={currentUser._id}
                            setSavedCards={props.setSavedCards}
                            handleDeleteArticle={props.handleDeleteArticle}
                        />))}
                </ul>}
        </section>
    )
}

export default NewsCardList;