import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styles from './CourseInput.module.css';


// const FormControl = styled.div`
//   margin: 0.5rem 0;

//  label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')};
// }


//  & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? '#ccc' : 'blue')};
//   background: ${props => (props.invalid ? 'red' : 'yellow')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;


// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// & invalid label{
//   color:crimson;
// }`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {/*T12s*/
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {/*T12s nem ír be semmit vagy csak spacet ír be*/
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {/* <FormControl invalid={!isValid}> */}

            {/* <div className="form-control">
            <label style={{color: !isValid ? 'red': 'blue'}}>Course Goal</label> {/*T12s * /}
            <input style={{borderColor: !isValid ? 'red': 'blue', background: !isValid ? '#f50': 'CadetBlue'}} type="text" onChange={goalInputChangeHandler} />
          </div> 
          /*<div className={`form-control ${!isValid ? 'invalid':''}`}>{/*A lényeg, hogy itt a . utáni részt fűzi hozzá a css csoprothoz */}
              <label >Course Goal</label> {/*T12s */}
              <input type="text" onChange={goalInputChangeHandler} />

            {/* </div> */}

        {/* </FormControl> */}


      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
