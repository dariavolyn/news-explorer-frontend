import React from 'react';

function Preloader(props) {
    return (
        <div className={`preloader ${props.isLoaded ? 'preloader_hide' : ''}`}>
            <i className='circle-preloader'></i>
        </div>
    )
}

export default Preloader;