import React from 'react';
import githubLogo from '../../images/github.svg';
import fbLogo from '../../images/fb_logo.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
            <nav className='footer__links'>
                <NavLink className='link footer__link link_type_home' to="/">Home</NavLink>
                <a
                    className='link footer__link link_type_practicum'
                    href='https://practicum.yandex.com/'
                    target='_blank'
                    rel='noreferrer'>Practicum by Yandex</a>
                <a
                    className='link footer__link link_type_github'
                    href='https://github.com/dariavolyn'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={githubLogo} alt='Github link' /></a>
                <a
                    className='link footer__link link_type_github'
                    href='https://www.facebook.com/daria.volyn'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={fbLogo} alt='Facebook link' /></a>
            </nav>
        </footer>
    )
}

export default Footer;