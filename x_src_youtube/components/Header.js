import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
// import Tasks from "./Tasks";
import { useLocation } from 'react-router-dom'

const Header =({title, onAdd, showAdd})=>{
    const location = useLocation()
    const onClick = ()=>{
        console.log("click");
    }
    return(
        <div className='header'>
         {location.pathname === '/'&&  <div>
            <h1 style={{color:"red"}}>{title}</h1>
            <h2 style={headingStyle}>{title}</h2>
            <Button color='green' text='hello'/>
            <Button color='red' text='red'/>
            <Button color='yellow' text='yellow' onClick={onClick} />
            <Button className="btn" color={showAdd? 'lightblue' : 'purple'} text={showAdd ? 'Close' : 'ADD'} onClick={onAdd} />
           {/* <Tasks/> */}
           </div>}
        </div>
    )
}

Header.defaultProps ={
    title:"ez itt egy title"
}
Header.proType={
    title: PropTypes.string.isRequired, /*Ezt az appba tudom betenni tilte ként */
}
const headingStyle={
    color: 'red', backgroundColor:'black'
}

export default Header;