import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Authentication from '../Authentication/Authentication.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
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
    const [savedCards, setSavedCards] = useState([]);
    const [keyword, setKeyword] = useState([]);

    const [currentUser, setCurrentUser] = useState({});

    const [isAuthOpen, setAuthOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isNavMobileOpen, setNavMobileOpen] = useState(false);
    const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);

    const history = useHistory();

    // global state for close on Esc
    useEffect(() => {
        const close = (e) => { if (e.keyCode === 27) { closeAllPopups(); } }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    })

    // checking token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            mainApi.getContent(token)
                .then(() => {
                    setLoggedIn(true);
                })
                .catch((e) => console.log(e))
        }
    }, [])

    // getting user info
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            mainApi.getUserInfo(token)
                .then((res) => {
                    setCurrentUser({
                        username: res.user.username,
                        _id: res.user._id
                    })
                })
                .catch((e) => console.log(e))
        }
    }, [])

    // popup behaviour
    function handleAuthOpen() {
        setSuccessPopupOpen(false);
        setRegisterOpen(false);
        setAuthOpen(true);
        history.push('/signin');
    }

    function handleRegisterOpen() {
        setAuthOpen(false);
        setRegisterOpen(true);
    }

    function handleNavMobileOpen() {
        setNavMobileOpen(true);
    }

    function closeAllPopups() {
        setSuccessPopupOpen(false);
        setRegisterOpen(false);
        setAuthOpen(false);
        history.push('/');
    }

    function closeNavMobile() {
        setNavMobileOpen(false);
    }

    // user forms submit
    function handleAuth(email, password) {
        mainApi.authorizeUser(email, password)
            .then((res) => {
                closeAllPopups();
                setLoggedIn(true);
                setCurrentUser({ username: res.user })
                history.push('/saved-news');
            })
            .catch((e) => { console.log(e) });
    }

    function handleRegister(email, password, username) {
        mainApi.registerUser(email, password, username)
            .then(() => {
                setRegisterOpen(false);
                setSuccessPopupOpen(true);
            })
            .catch((e) =>
                console.log(e));
    }

    // searching cards
    function searchCards(search) {
        setIsPreloaderOpen(true);
        setIsNothingFoundOpen(false);
        setCards([]);

        newsApi.getCardsList(search)
            .then((res) => {
                if (res.totalResults === 0) {
                    setIsNothingFoundOpen(true);
                } else {
                    setKeyword(search);
                    setCards(res);
                }
            })
            .then(() => {
                setIsPreloaderOpen(false)
            })
            .catch((e) => console.log(e));
    }

    // saving an article 
    function handleSaveArticle(card) {
        mainApi.saveArticle(card)
            .then((res) => {
                savedCards.push(res);
                setSavedCards(res.data);
            })
            .catch((e) => console.log(e))

            mainApi.getSavedArticles()
            .then((res) => {
                setSavedCards(res.data.reverse());
            })
            .catch((e) => console.log(e));
    }

    // showing saved articles from newest saved to oldest
    useEffect(() => {
        mainApi.getSavedArticles()
            .then((res) => {
                setSavedCards(res.data.reverse());
            })
            .catch((e) => console.log(e));
    }, [])

    // deleting saved article
    function handleDeleteArticle(id) {
        mainApi.deleteSavedArticle(id)
            .then(() => {
                const newList = savedCards.filter(((card) => card._id !== id));
                setSavedCards(newList);
            })
            .catch((e) => console.log(e));
    }

    // logging out
    function handleSignOut() {
        localStorage.removeItem('token');
        setCurrentUser({});
        setLoggedIn(false);
        history.push('/');
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className='app'>
                    <Switch>
                        <Route exact path='/saved-news'>
                            <SavedNews
                                savedCards={savedCards}
                                isLoggedIn={isLoggedIn}
                                isNavMobileOpen={isNavMobileOpen}
                                handleDeleteArticle={handleDeleteArticle}
                                handleSignOut={handleSignOut}
                                onClose={closeNavMobile}
                                onOpen={handleNavMobileOpen}
                                page='saved-news'
                            />
                        </Route>
                        <Route path='/'>
                            <Header
                                closeNavMobile={closeNavMobile}
                                isLoggedIn={isLoggedIn}
                                isNavMobileOpen={isNavMobileOpen}
                                handleRegisterOpen={handleRegisterOpen}
                                handleSignOut={handleSignOut}
                                onAuth={handleAuthOpen}
                                onClose={closeAllPopups}
                                onOpen={handleNavMobileOpen}
                                page='main'
                            />
                            <Main
                                cards={cards.articles}
                                keyword={keyword}
                                isLoggedIn={isLoggedIn}
                                isNothingFoundOpen={isNothingFoundOpen}
                                isPreloaderOpen={isPreloaderOpen}
                                searchCards={searchCards}
                                handleSaveArticle={handleSaveArticle}
                                page='main'
                            />
                        </Route>
                    </Switch>

                    <Route path='/signin'>
                        <Authentication
                            altFormTitle='Sign up'
                            altFormLink='/signup'
                            openAltForm={handleRegisterOpen}
                            isOpen={isAuthOpen}
                            formSubmit={handleAuth}
                            onClose={closeAllPopups}
                        />
                    </Route>
                    <Route path='/signup'>
                        <Register
                            altFormTitle='Sign in'
                            altFormLink='/signin'
                            openAltForm={handleAuthOpen}
                            isOpen={isRegisterOpen}
                            formSubmit={handleRegister}
                            onClose={closeAllPopups}

                        />
                    </Route>

                    <SuccessPopup
                        isOpen={isSuccessPopupOpen}
                        openAuth={handleAuthOpen}
                        onClose={closeAllPopups}
                    />
                    <Footer />
                </div>
            </CurrentUserContext.Provider>
        </>
    )
}

export default App;