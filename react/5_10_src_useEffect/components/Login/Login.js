import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("RUN")
    return () => {
      console.log("proba")//másodszorra fut ha telejesül a feltétel
    }
  }, [enteredPassword])/*ha mincs a végén [] akkor autómata ürsnek veszi
  ha van akkor csak elsőre fut le
  ha megadok neki akkor ahhoz köti, hogy az változik-e */

  /*ezzel azt érem el ha vissza törlök bármit akkor a gomb deaktiválodik*/
  useEffect(() => {

    const identifier = setTimeout(() => {
      console.log('Checking form validity');
      setFormIsValid(
      /*event.target.value*/enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500)


    return () => {
      console.log("kitt katt")
      clearTimeout(identifier);/*clearTimeout ha 500 msecen belül történik akkor inditja el. */
    }

  }, [enteredEmail, enteredPassword])/*addig úgy marad amig nem változik meg egyik */;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);


  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
