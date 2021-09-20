import React from 'react';
import aboutPic from '../../images/about-pic.jpeg';

function About() {
    return (
        <div className='about'>
                <img className='about__picture' alt='Author' src={aboutPic} />
                <div className='about__text'>
                    <h3 className='about__title'>About the author</h3>
                    <p className='about__info'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
                    <p className='about__info'>You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
                </div>
            </div>
    )
}

export default About;