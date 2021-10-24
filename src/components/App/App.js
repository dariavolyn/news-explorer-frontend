import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Authentication from '../Authentication/Authentication.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SuccessPopup from '../SuccessPopup/SuccessPopup.js';
import newsApi from '../../utils/NewsApi.js';
import mainApi from '../../utils/MainApi.js';


function App() {
    const [cards, setCards] = useState([]);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isAuthOpen, setAuthOpen] = useState(false);
    const [isNavMobileOpen, setNavMobileOpen] = useState(false);
    const [isCardSaved, setCardSaved] = useState(false);
    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
    const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const close = (e) => { if (e.keyCode === 27) { closeAllPopups(); } }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    function searchCards(search) {
        setIsPreloaderOpen(true);

        setIsNothingFoundOpen(false);

        setCards([]);

        newsApi.getCardsList(search)
            .then((res) => {
                if (res.totalResults === 0) {
                    setIsNothingFoundOpen(true);
                } else { setCards(res) }
            })
            .then(() => setIsPreloaderOpen(false))
            .catch((err) => {
                console.log(err);
            });
    }

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

    function closeAllPopups(e) {
        history.push('/');
        setSuccessPopupOpen(false);
        setRegisterOpen(false);
        setAuthOpen(false);
        setNavMobileOpen(false);
    }

    function handleRegister (email, password, username) {
        console.log(email, password, username)
        mainApi.registerUser(email, password, username)
            .then((res) => {
                if (res) {
                    setSuccessPopupOpen(true);
                    setRegisterOpen(false);
                    history.push('/signin');
                } else {
                    return
                }
            }).catch(e => {
                console.log(e);
            })
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

                    <Route path='/'>
                        <Header
                            isNavMobileOpen={isNavMobileOpen}
                            onAuth={handleAuthOpen}
                            onClose={closeAllPopups}
                            onOpen={handleNavMobileOpen}
                            handleRegisterOpen={handleRegisterOpen}
                            page='main'
                        />
                        <Main
                            cards={cards.articles}
                            isNothingFoundOpen={isNothingFoundOpen}
                            isPreloaderOpen={isPreloaderOpen}
                            isSaved={isCardSaved}
                            onSave={handleSaveCard}
                            page='main'
                            searchCards={searchCards}
                        />
                    </Route>

                    <Route exact path='/saved-news'>
                        <SavedNews
                            isNavMobileOpen={isNavMobileOpen}
                            onClose={closeAllPopups}
                            onOpen={handleNavMobileOpen}
                            page='saved-news'
                        />
                    </Route>

                </Switch>
                <Switch>
                    <Route exact path='/signin'>
                        <Authentication
                            altFormTitle='Sign up'
                            altFormLink='/signup'
                            openAltForm={handleRegisterOpen}
                            isOpen={isAuthOpen}
                            formSubmit={handleAuth}
                            onClose={closeAllPopups}
                        />
                    </Route>

                    <Route exact path='/signup'>
                        <Register
                            altFormTitle='Sign in'
                            altFormLink='/signin'
                            openAltForm={handleAuthOpen}
                            isOpen={isRegisterOpen}
                            formSubmit={handleRegister}
                            onClose={closeAllPopups}
                        />
                    </Route>

                </Switch>
                <SuccessPopup
                    isOpen={isSuccessPopupOpen}
                    openAuth={handleAuthOpen}
                    onClose={closeAllPopups}
                />

                <Footer />

            </div>
        </>
    )
}

export default App;