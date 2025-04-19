import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';

import { authActions } from '../store/index'

const Auth = () => {
  const dispatch = useDispatch();//inicializáljuk a dispatchet

  const loginHandler = (event) => {
    event.preventDefault();//ne frissüljön
    dispatch(authActions.login());//dispach lefuttatjuk a login metódust a authActions reduxba
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
