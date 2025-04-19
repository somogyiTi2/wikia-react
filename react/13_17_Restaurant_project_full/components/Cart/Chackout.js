import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 4;

const Checkout = (props) => {
    //ha minden igaz,a trueka felülírja az adatokra
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });
    //Bemenő adatok
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        //preventDefault() metódus törli az eseményt, és nem frissíti le ezáltal az oldalt, mert akkor minden adat veszik
        event.preventDefault();
        //Beléptet (valószínü a fügvényve behozza az értéket)
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        //validálók:
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        //validált true, false
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });
        //az egészet ellenörzi hogy igaz e
        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;
        //ha nem igaz minden akkor nem ad vissza értéket
        if (!formIsValid) {
            return;
        }
        //ez a kimenő adat 
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        });
    };
    //stílus ellem szabáloyzók a control oszályba mindenképp bent viszont a forInpustVAlidity-nek meghatárzott elem eldönti igaz vagy hamis.
    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid
        }`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid
        }`;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid
        }`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid
        }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formInputsValidity.postalCode && (
                    <p>Please enter a valid postal code (5 characters long)!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
