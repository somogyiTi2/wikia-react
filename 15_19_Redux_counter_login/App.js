import { Fragment } from 'react';
import { useSelector } from 'react-redux';

//useSelector Lehetővé teszi adatok kinyerését a Redux tároló állapotából egy választó funkció segítségével.

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'


function App() {
const isAuth = useSelector(state => state.auth.isAuthenticated);

// console.log(isAuth);
  return (
    <Fragment>
    <Header/>
   {!isAuth ? <Auth/> : <UserProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;
