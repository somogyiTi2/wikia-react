import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLogdin', '_IN_');//localStorage-futtatható helyi tárhely 
    /* Chrome/Almalazás/Tárhely/Helyi tárhely ha lefrissítem az oldalt is az utolsó állapotba marad*/
    setIsLoggedIn(true);
  };
  //ez bejelentkeztetve maradtat... 
  useEffect(() => {
    const StoredUserLoggInFormation = localStorage.getItem('isLogdin');

    if (StoredUserLoggInFormation === '_IN_') {
      setIsLoggedIn(true);
    }
    
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLogdin');// ezzel tudom törölni a localStorage-et
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
