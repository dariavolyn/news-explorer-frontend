import React from 'react';
import background from '../../images/main-background-phone.jpeg'

function Main(props) {
    return (
        <div className="main">
            <img className="main-background-image" src={background} alt="Person holding a phone"></img>
        </div>
    )
}

export default Main;