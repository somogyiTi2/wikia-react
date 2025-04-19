import React from 'react'

export const Card = ({Data}) => {
  return (
    <div className='Data'>
         <p>{Data.UserName} ({Data.UserYear} years old)</p>
    </div>
  )
}
export default Card;
