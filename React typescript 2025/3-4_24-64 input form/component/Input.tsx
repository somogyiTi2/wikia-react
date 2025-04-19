import React, { forwardRef, type ComponentPropsWithRef } from 'react'

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithRef<'input'>;

//a forwardRef fügvény a react része és arra való, hogy egy szülő refet- tudjunk vele irányítani.
// forwardRef<HTMLInputElement,InputProps> az első érték amit a ref kezel, a második a többi kellékre.
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, id, ...props }: InputProps,
    ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} ></input>
        </p>
    )
})

export default Input;