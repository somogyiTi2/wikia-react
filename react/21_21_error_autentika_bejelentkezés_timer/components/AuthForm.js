// import { useState } from 'react';
import { Form, Link, useActionData, useSearchParams, useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  //https://reactrouter.com/en/main/hooks/use-action-data
  //az előző navigáció eredményének visszaadott értéket adja 'action'/'undefined'
  //ezzel határozzuk meg a szerverről visszajövő hibát (pl.2 x ugyan azt az e-mailt akarnánk regisztrálni.)

  const navigation = useNavigate();
  //vissza adja azt amilyen navigáciuós helyen van.

  // const [isLogin, setIsLogin] = useState(true);
  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  const [searchParams] = useSearchParams();
  //https://reactrouter.com/en/main/hooks/use-search-params
  //const [beállítotKeresettÉrék, AkkuBeállító] =userSearchParameters();
  //A useSearchParamshook az aktuális hely URL-jében található lekérdezési karakterlánc olvasására és módosítására szolgál.
  const isLogin = searchParams.get('mode') === 'login';
  //összekapcsolodik lent  'mode' résznél 
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {/* A link a tetején megváltozik */}
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button> */}
          <button disabled={isSubmitting}>{isSubmitting?'Submitting...':'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
