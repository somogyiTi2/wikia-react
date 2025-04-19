import React from 'react';
import PrpTypes from 'prop-types';

const Button = ({color,text, onClick}) => {
//     const onClick=(e)=>{
//         console.log("Klikk"); /*ha e-t írok beneti értéknek akkor megnézhetem milyen akció van*/
//         console.log(e);
// }

  return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}

Button.defaultPrps={
    color:'steeéblue'
}

Button.prototype={
    text: PrpTypes.string,
    color: PrpTypes.string,
    onClick: PrpTypes.func
        
    }


export default Button