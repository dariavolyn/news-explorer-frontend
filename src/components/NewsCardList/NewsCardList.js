import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js'

function NewsCardList() {
    return (
        <div className="news-card-list">
            <ul className="news-card-list-grid">
                <h3 className="news-card-list-title">Search results</h3>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </ul>
            <button className="button news-card-show-more" type="button">Show more</button>
        </div>
    )
}

export default NewsCardList;