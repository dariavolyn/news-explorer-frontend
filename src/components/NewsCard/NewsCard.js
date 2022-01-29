import React, { useState } from 'react';
import Moment from 'moment';

function NewsCard(props) {
    const [isCardSaved, setCardSaved] = useState(false);

    function convertDate() {
        Moment.locale('en');
        const d = props.date;
        return Moment(d).format('DD MMMM YYYY');
    }

    function openArticle() {
        window.open(props.link);
    }

    function onDelete() {
        props.handleDeleteArticle(props.id);
    }

    function onSave() {
        if (isCardSaved === false && props.isLoggedIn) {
            setCardSaved(true);
            props.handleSaveArticle({
                link: props.link,
                image: props.image,
                date: props.date,
                title: props.title,
                text: props.text,
                source: props.source,
                keyword: props.keyword,
                owner: props.owner,
                id: props.id,
            })
        } else {
            setCardSaved(false);
        }
    }


    return (
        <li className='news-card'>
            <button className='button news-card__link'>
                {props.image
                    ? <img className='news-card__picture' src={props.image} alt="News cover" onClick={openArticle} />
                    : <div className='news-card__no-img-container'>
                        <p className='news-card__no-img'>No image</p>
                    </div>}
            </button>

            {props.page === 'saved-news' &&
                <>
                    <p className='news-card__picture-label'>{props.keyword}</p>
                    <button className='button news-card__button news-card__delete' onClick={onDelete}>
                        <div className='news-card__tooltip-wrap tooltip-wrap_type_delete'>
                            <div className='news-card__tooltip'>
                                <p className='news-card__tooltip-text'>Remove from saved</p>
                            </div>
                        </div>
                    </button>
                </>}

            {props.page === 'main' &&
                <button
                    onClick={isCardSaved ? onDelete : onSave}
                    className={`button news-card__button news-card__save ${isCardSaved ? 'news-card__saved' : ''}`}>
                    <div className='news-card__tooltip-wrap tooltip-wrap_type_save'>
                        {props.isLoggedIn === false && <div className='news-card__tooltip'>
                            <p className='news-card__tooltip-text'>Sign in to save articles</p>
                        </div>}
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