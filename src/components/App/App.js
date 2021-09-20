import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Authentication from '../Authentication/Authentication.js';
import SavedNews from '../SavedNews/SavedNews.js';

function App(props) {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isAuthOpen, setAuthOpen] = useState(false);
    const [isNavMobileOpen, setNavMobileOpen] = useState(false);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                closeAllPopups();
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    function handleAuthOpen() {
        setRegisterOpen(false);
        setAuthOpen(true);
    }
    function handleRegisterOpen() {
        setAuthOpen(false);
        setRegisterOpen(true);
    }

    function handleNavMobileOpen() {
        setNavMobileOpen(true);
    }

    function closeAllPopups() {
        setRegisterOpen(false);
        setAuthOpen(false);
        setNavMobileOpen(false);
    }
    return (
        <div className='app'>
            <Route exact path='/'>
                <Header
                    type='main'
                    onAuth={handleAuthOpen}
                    isNavMobileOpen={isNavMobileOpen}
                    onOpen={handleNavMobileOpen}
                    onClose={closeAllPopups}
                />
                <Main />
            </Route>

            <Route exact path='/saved-news'>
                <SavedNews />
            </Route>

            <Footer />

            <Register isOpen={isRegisterOpen} onClose={closeAllPopups} openAltForm={handleAuthOpen} />

            <Authentication isOpen={isAuthOpen} onClose={closeAllPopups} openAltForm={handleRegisterOpen} />
        </div>
    )
}

export default App;