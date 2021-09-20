import React from 'react';
import cardPicture1 from '../../images/card.jpeg';

function NewsCard(props) {
    return (
        <li className='news__card'>
            <img className='news__card_picture' src={cardPicture1} alt="Card pitcure"></img>
            <div className='news__card_picture-label'>Nature</div>
            <button className='button news__card_picture-delete'></button>
            <div className='news__card-content'>
                <p className='news__card_date'>November 4, 2020</p>
                <h2 className='news__card_title'>Everyone Needs a Special 'Sit Spot' in Nature</h2>
                <p className='news__card_text'>Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className='news__card_source'>Treehugger</p>
            </div>
        </li>
    )
}

export default NewsCard;