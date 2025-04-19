import React from 'react';
import { useContext } from 'react';
import { TContext } from './TContext';

export const Elsokomponens = () => {
    // const ctx = useContext(TContext);
    const {proba, setproba}=useContext(TContext);
  return (
    <div>
    {/* {ctx} */}
       {proba}
       <button onClick={()=>setproba("ÚJ érték")}>useContext változtató</button>
    </div>
  )
}

export default Elsokomponens