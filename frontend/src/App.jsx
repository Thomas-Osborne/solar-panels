import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';

import React from 'react';

export default function App() {


  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);


  function openModal() {
    setIsOpen(true);

  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {isLoggedIn
        ? <div>
            <Logout isOpen={isOpen} openModal={openModal} closeModal={closeModal}/>
            <Header />
            <div className="flex">
              <Sidebar openModal={openModal}/>
              <div className="grow">
                <Body />
                <Footer />
              </div>
            </div>
          </div>
        : <div> Please sign in. </div>}
    </>
  )
}