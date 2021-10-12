import React from 'react';
import Moment from 'moment';
import cardPicture1 from '../../images/card.jpeg';

function NewsCard(props) {

    function convertDate() {
        Moment.locale('en');
        const d = props.date;
        return Moment(d).format('DD MMMM YYYY');
    }

    return (
        <li className='news-card'>
            {props.image
                ? <img className='news-card__picture' src={props.image} alt="News cover"></img>
                : <div className='news-card__no-img-container'>
                    <p className='news-card__no-img'>No image</p>
                </div>}
            <p className='news-card__picture-label'>Label</p>

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
                <p className='news-card__date'>{convertDate()}</p>
                <h2 className='news-card__title'>{props.title}</h2>
                <p className='news-card__text'>{props.text}</p>
                <p className='news-card__source'>{props.source}</p>
            </div>
        </li>

    )
}

export default NewsCard;