import React from 'react';
import cardPicture1 from '../../images/card.jpeg';

function NewsCard(props) {
    return (
        <li className='news-card'>
            <img className='news-card__picture' src={cardPicture1} alt="News cover"></img>
            <p className='news-card__picture-label'>Nature</p>

            {props.page === 'saved-news' &&
                <button className='button news-card__button news-card__delete'>
                    <div className='news-card__tooltip-wrap tooltip-wrap_type_delete'>
                        <div class='news-card__tooltip'>
                            <p className='news-card__tooltip-text'>Remove from saved</p>
                        </div>
                    </div>
                </button>}

            {props.page === 'main' && 
            <button
                onClick={props.onSave}
                className={`button news-card__button news-card__save ${props.isSaved ? 'news-card__saved' : ''}`}>
                <div className='news-card__tooltip-wrap tooltip-wrap_type_save'>
                    <div class='news-card__tooltip'>
                        <p className='news-card__tooltip-text'>Sign in to save articles</p>
                    </div>
                </div>
            </button>}

            <div className='news-card__content'>
                <p className='news-card__date'>November 4, 2020</p>
                <h2 className='news-card__title'>Everyone Needs a Special 'Sit Spot' in Nature</h2>
                <p className='news-card__text'>Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className='news-card__source'>Treehugger</p>
            </div>
        </li>
    )
}

export default NewsCard;