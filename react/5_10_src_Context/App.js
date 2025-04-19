import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
// import AuthContext from './store/auth-context';

function App() {
 const ctx= useContext(AuthContext);

  //ÁTHELYEZVE A auth-context.js-be
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    //   if (storedUserLoggedInInformation === '1') {
    //     setIsLoggedIn(true);
    //   }
    // }, []);

    // const loginHandler = (email, password) => {
    //   // We should of course check email and password
    //   // But it's just a dummy/ demo anyways
    //   localStorage.setItem('isLoggedIn', '1');
    //   setIsLoggedIn(true);
    // };

    // const logoutHandler = () => {
    //   localStorage.removeItem('isLoggedIn');
    //   setIsLoggedIn(false);
    // };
  //ÁTHELYEZVE A auth-context.js-be

  return (
    // // <React.Fragment>
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler
    //   }}>
    <React.Fragment>
      <MainHeader
        //  isAuthenticated={isLoggedIn}
        // onLogout={logoutHandler} 
        />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      </React.Fragment>
    // </AuthContext.Provider>
    // // </React.Fragment>
  );
}

export default App;
