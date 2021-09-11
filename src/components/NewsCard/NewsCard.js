import React from 'react';
import cardPicture1 from '../../images/card.jpeg';

function NewsCard(props) {
    return (
        <li className="news-card">
            <img className="news-card-picture" src={cardPicture1} alt="Card pitcure"></img>
            <div className="news-card-content">
                <p className="news-card-date">November 4, 2020</p>
                <h2 className="news-card-title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
                <p className="news-card-text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className="news-card-source">Treehugger</p>
            </div>
        </li>
    )
}

export default NewsCard;