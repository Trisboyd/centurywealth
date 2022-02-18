import React from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { CurrentUserContext } from './contexts/CurrentUserContext';
import mainApi from './utilities/MainAPI';

import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Mission from './components/Mission/mission';
import Popup from './components/Popup/popup';
import ClientHome from './components/ClientHome/clientHome';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {

  // _______________________________________________________________________________Authorization
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    id: '',
    stocks: [],
  });

  const [loggedIn, setLoggedIn] = React.useState(false);

  const token = localStorage.getItem('token');

  const navigate = Navigate;


  // ____________________________________________registration function
  const handleSignup = (inputs) => {
    mainApi.signup(inputs)
      .then((response) => {
        if (response) {
          console.log(response);
          closePopup();
        }
      })
      .catch(error => {
        error.status === 409 &&
          console.log(error.status, error)
        // add error message so user knows what the crap is going on
      })
  }

  // _________________________________________login function
  const handleSignin = (inputs) => {
    mainApi.signin(inputs)
      .then((response) => {
        if (!response) {
          return
        }
        if (response.token) {
          setLoggedIn(true);
          closePopup();
        }
      })
      .catch(error => console.log(error));
  }

  const getCurrentUser = () => {
    mainApi.getCurrentUser(token).then(response => {
      if (response) {
        setLoggedIn(true);
        setCurrentUser({
          name: response.user.name,
          email: response.user.email,
          id: response.user._id,
          stocks: response.user.stocks,
        })
      }
      else console.log('Log in error')
    })
      .catch(error => {
        console.log(error)
        setCurrentUser({});
      });
  }

  // __________________________________________logout
  const signout = () => {
    navigate('/');
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  // _________________________________ collect user info whenever these functions are called
  React.useEffect(() => {
    getCurrentUser();
  }, [loggedIn]);

  // _______________________________________________________________________________Popup Functions
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        openPopup={openPopup}
      />
      <Routes>
        <Route path='/home'
          element={
            <>
              <Hero />
              <div id='mission'>
                <Mission />
              </div>
              <div id='about'>
                <About />
              </div>
            </>
          }>
        </Route>
        <Route path='/contact'
          element={<Contact />}>
        </Route>
        <Route path='/accounthome'
          element={<ProtectedRoute
            loggedIn={loggedIn}
            element={<ClientHome
              username={currentUser.name} />}>
          </ProtectedRoute>
          }>
        </Route>
      </Routes>
      <Footer />
      <Popup
        isOpen={popupOpen}
        closePopup={closePopup}
        handleSignup={handleSignup}
        handleSignin={handleSignin} />
    </CurrentUserContext.Provider >
  )
}

export default App;
