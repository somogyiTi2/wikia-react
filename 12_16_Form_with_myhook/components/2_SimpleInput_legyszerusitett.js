import { useState } from "react";

const SimpleInput = (props) => {
  //megoldható useStatel 
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //Blur funkció feladata, ha nem írunk be semmit csak tovább kattintuk hibát dob fel.
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const forSubmissionHandler = event => {
    //useState megoldás
    event.preventDefault();
    //ez állítja azt,be hogy már műkködött e egyszer a validáció
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');//üriti
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={forSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}

          value={enteredName} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Üres a név</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
