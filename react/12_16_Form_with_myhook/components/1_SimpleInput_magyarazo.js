import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  //megoldható useStatel 
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  //vagy reffel
  const nameInputRef = useRef('');
  //ref HTML -be beilleszthető a react miatt

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  //ez nem jó megoldás mivel ha erre a változóra hasznánánk egy bármilyen dolgot lásd=> már is igaz lenne
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Igaz a változó')
    }
  }, [enteredNameIsValid]);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //Blur funkció feladata, ha nem írunk be semmit csak tovább kattintuk hibát dob fel.
  const nameInputBlurHandler = event =>{
    setEnteredNameTouched(true);
    if (enteredName.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  const forSubmissionHandler = event => {
    //useState megoldás
    event.preventDefault();
    //ez állítja azt,be hogy már műkködött e egyszer a validáció
    setEnteredNameTouched(true);

    //ide kell helyezni a validálót miszerint üres e vagy sem a kivlásztott érkték
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName('');//üriti

    //useRef megoldás
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    nameInputRef.current.value = '';//üriti

  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={forSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          ref={nameInputRef}
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
