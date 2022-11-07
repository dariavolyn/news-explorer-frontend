import React from 'react';
import aboutPic from '../../images/about-pic.jpeg';

function About() {
    return (
        <section className='about'>
            <img className='about__picture' alt='Author' src={aboutPic} />
            <div className='about__text'>
                <h3 className='about__title'>About the author</h3>
                <p className='about__info'>Hi! My name is Daria, I am a full-stack web developer based in NYC. I am proficient in HTML, CSS, JavaScript, React.js, Node.js, and npm. I love hiking and my two cats!</p>
            </div>
        </section>
    )
}

export default About;