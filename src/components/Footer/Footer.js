import React from 'react';
import githubLogo from '../../images/github.svg';
import fbLogo from '../../images/fb_logo.svg';

function Footer() {
    return (
        <div className='footer'>
            <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
            <nav className='footer__links'>
                <a className='link footer__link_home' href='http://home.com'>Home</a>
                <a className='link footer__link_practicum' href='https://practicum.yandex.com/'>Practicum by Yandex</a>
                <a className='link footer__link_github' href='https://github.com/dariavolyn'>
                    <img src={githubLogo} alt='Github link' /></a>
                <a className='link footer__link_fb' href='https://www.facebook.com/daria.volyn'>
                    <img src={fbLogo} alt='Facebook link' /></a>
            </nav>
        </div>
    )
}

export default Footer;