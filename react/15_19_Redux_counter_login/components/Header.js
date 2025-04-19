import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispach = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();//ne frissüljön
    dispach(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }

    </header>
  );
};

export default Header;
