import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //value: enteredValue,isValid: valueValid,, hasError: hasError, valueChangeHandler,inputBlurHanler,reset <-SimpleInput
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailTouched,
    hasError: enteredEmailIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  /*mindent egy objektumként küldök be és +ba mivel a use Input fügvénybe van egy 
  validátor itt kell beadnom változó ként az érékét.
  value => validateValue  */

  //megoldható useStatel 
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  //minden változó igaz e, pl életkor név minden igaz e
  if (enteredNameIsValid && enteredEmailTouched) {
    formIsValid = true;
  }

  

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // };
  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  //Blur funkció feladata, ha nem írunk be semmit csak tovább kattintuk hibát dob fel.
  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);
  // };
  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    //useState megoldás
    event.preventDefault();
    //ez állítja azt,be hogy már műkködött e egyszer a validáció
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);

    // console.log(enteredName);
    // console.log(enteredMail);
    // // setEnteredName('');//üriti
    // setEnteredMail('');//üriti
    // // setEnteredNameTouched(false);
    // setEnteredMailTouched(false);
  }

  const nameInputClasses = nameInputHasError
  ? 'form-control invalid'
  : 'form-control';


  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
    <div className={nameInputClasses}>
      <label htmlFor='name'>Your Name</label>
      <input
        type='text'
        id='name'
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
      />
      {nameInputHasError && (
        <p className='error-text'>Name must not be empty.</p>
      )}
    </div>
    <div className={emailInputClasses}>
      <label htmlFor='email'>Your E-Mail</label>
      <input
        type='email'
        id='email'
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
      />
      {enteredEmailIsInvalid && (
        <p className='error-text'>Please enter a valid email.</p>
      )}
    </div>
    <div className='form-actions'>
      <button disabled={!formIsValid}>Submit</button>
    </div>
  </form>
  );
};

export default SimpleInput;
