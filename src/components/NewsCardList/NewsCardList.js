import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {

    // function a() {
    //     cards.map((c) => {
    //         return <NewsCard
    //             title={c.title}
    //             link={c.url}
    //             image={c.urlToImage}
    //             source={c.source}
    //             date={c.publishedAt}
    //             text={c.content}
    //         />
    //     })
    // }

    //props.cards.map((c) => {console.log(c)})
    return (
        <section className='news-list'>

            {props.page === 'main' && <h3 className='news-list__title'>Search results</h3>}

            <ul className='news-list__cards'>

                {props.cards.map((card) => (
                    <NewsCard
                        key={uuidv4()}
                        title={card.title}
                        source={card.source.name}
                        text={card.content}
                        image={card.urlToImage}
                        date={card.publishedAt.toString()}
                        onSave={props.onSave}
                    />))}
            </ul>

            {props.page === 'main' && <button className='button news-list__show-more' type='button'>Show more</button>}
        </section>
    )
}

export default NewsCardList;