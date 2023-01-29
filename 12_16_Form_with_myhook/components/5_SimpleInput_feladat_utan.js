import { useState } from "react";

const SimpleInput = (props) => {

  //megoldható useStatel 
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredMail, setEnteredMail] = useState('');
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  const enteredMailIsValid = enteredMail.trim() !== '' && /\S+@\S+\.\S+/.test(enteredMail);//Ide kell az email ellenörés és hogy üres e
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;  
  //minden változó igaz e, pl életkor név minden igaz e
  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const mailInputChangeHandler = event => {
    setEnteredMail(event.target.value);
  };

  //Blur funkció feladata, ha nem írunk be semmit csak tovább kattintuk hibát dob fel.
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };
  const mailInputBlurHandler = event => {
    setEnteredMailTouched(true);
  };

  const forSubmissionHandler = event => {
    //useState megoldás
    event.preventDefault();
    //ez állítja azt,be hogy már műkködött e egyszer a validáció
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredMail);
    setEnteredName('');//üriti
    setEnteredMail('');//üriti
    setEnteredNameTouched(false);
    setEnteredMailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const MailenteredName = mailInputIsInvalid ? 'form-control invalid' : 'form-control';

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
      <div className={MailenteredName}>
        <label htmlFor='name'>Mail</label>
        <input type='emial'
          id='mail'
           onChange={mailInputChangeHandler}
           onBlur={mailInputBlurHandler}
           value={enteredMail} 

          />
      </div>
      {nameInputIsInvalid && <p className="error-text">Üres a név</p>}
      {mailInputIsInvalid && <p className="error-text">Üres vagy hibás az e-mail</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
