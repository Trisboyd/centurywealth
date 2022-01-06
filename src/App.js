import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Mission from './components/Mission/mission';
import Popup from './components/Popup/popup';

const App = () => {

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <>
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
      </Routes>
      <Footer />
      <Popup
        isOpen={popupOpen}
        closePopup={closePopup} />
    </>
  )
}

export default App;
