import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Authentication from '../Authentication/Authentication.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SuccessPopup from '../SuccessPopup/SuccessPopup.js';


function App(props) {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isAuthOpen, setAuthOpen] = useState(false);
    const [isNavMobileOpen, setNavMobileOpen] = useState(false);
    const [isCardSaved, setCardSaved] = useState(false);
    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const history = useHistory();

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
        setSuccessPopupOpen(false);
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

    function handleSaveCard() {
        if (setCardSaved(true)) {
            setCardSaved(false);
        } setCardSaved(true)
    }

    function closeAllPopups() {
        setSuccessPopupOpen(false);
        setRegisterOpen(false);
        setAuthOpen(false);
        setNavMobileOpen(false);
    }

    function handleRegister(e) {
        e.preventDefault();
        setSuccessPopupOpen(true);
        setRegisterOpen(false);
    }

    function handleAuth(e) {
        e.preventDefault();
        closeAllPopups();
        history.push('/saved-news')
    }

    return (
        <>
            <div className='app'>
                <Switch>
                    <Route exact path='/'>
                        <Header
                            page='main'
                            onAuth={handleAuthOpen}
                            isNavMobileOpen={isNavMobileOpen}
                            onOpen={handleNavMobileOpen}
                            onClose={closeAllPopups}
                        />
                        <Main
                            page='main'
                            onSave={handleSaveCard}
                            isSaved={isCardSaved}
                        />
                    </Route>

                    <Route exact path='/saved-news'>
                        <SavedNews
                            page='saved-news'
                            isNavMobileOpen={isNavMobileOpen}
                            onOpen={handleNavMobileOpen}
                            onClose={closeAllPopups}
                        />
                    </Route>

                </Switch>

                <Register isOpen={isRegisterOpen} onClose={closeAllPopups} openAltForm={handleAuthOpen} register={handleRegister} />

                <Authentication isOpen={isAuthOpen} onClose={closeAllPopups} openAltForm={handleRegisterOpen} auth={handleAuth} />

                <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} openAuth={handleAuthOpen} />

                <Footer />

            </div>
        </>
    )
}

export default App;