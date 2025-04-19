import React from 'react'
import Card from './Card';
import "./Style.css"


export const OutputHendler = ({ Data }) => {
    return (
      <div className='Component'>
        {Data.map(
          (Data) => (
            <Card key={Data.id} Data={Data}  />
          )
        )}
  
      </div>
    )
  }
export default OutputHendler;