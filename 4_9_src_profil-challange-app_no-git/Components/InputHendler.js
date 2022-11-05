import React from 'react'
import { useState } from 'react'
import "./Style.css"

export const InputHendler = ({IdMaker}) => {
    
  
const [UserName, setUsername]= useState('');
const [UserYear, setUserYear]= useState('');

const OnSubmit=(event)=>{
  event.preventDefault();
  if ( UserYear <= 0 || UserName == ""){
    alert("Fail Data.")
    
  }else{
    const ExportData = {
      id: Math.random().toString(),
      UserName: UserName,
      UserYear: UserYear
    }
    
    IdMaker(ExportData);
    setUsername("");
    setUserYear("");
  }
  
}

  return (
    <form onSubmit={OnSubmit} className="Component">
        <h2>User name</h2>
        <input type={'text'} value={UserName}
        onChange={(e)=>setUsername(e.target.value)}></input>
        <h2>Age (Year)</h2>
        <input type={'number'} value={UserYear}
        onChange={(e)=>setUserYear(e.target.value)}
        ></input>
        <p/>
        <button type='submit'>add</button>
    </form>
  )
}
export default InputHendler;
