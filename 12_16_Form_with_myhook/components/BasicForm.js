import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: fnameChangedHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangedHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailTouched,
    hasError: enteredEmailIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailTouched) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
   
    console.log(enteredFName);
    console.log(enteredLName);
    console.log(enteredEmail);
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  }

  const fnameInputClasses = fnameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const lnameInputClasses = lnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>

        <div className={fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text'
            id='name'
            onChange={fnameChangedHandler}
            onBlur={fnameBlurHandler}
            value={enteredFName} />
        </div>
        {fnameInputHasError && (
        <p className='error-text'>First fame must not be empty.</p>
      )}

        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
            id='name'
            onChange={lnameChangedHandler}
            onBlur={lnameBlurHandler}
            value={enteredLName} />
        </div>
        {lnameInputHasError && (
        <p className='error-text'>Last fame must not be empty.</p>
      )}

        <div className={emailInputClasses}>
          <label htmlFor='name'>Your E-Mail</label>
          <input type='text'
            id='name'
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail} />
        </div>
        {enteredEmailIsInvalid && (
        <p className='error-text'>E-mail must not correct.</p>
      )}

        <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
