import React, { useState } from 'react';
import Elsokomponens from './Elsokomponens';
import { TContext } from './TContext'
/*fontos, hogy {} legyen DEFAULT HIBA*/

function App() {
  const [proba,setproba]=useState("EREDETI SZÖVEG");
  return (
    // <TContext.Provider value="ITT ADHATÓ NEKI ÉRTÉK">
    <TContext.Provider value={{proba, setproba}}>
      <Elsokomponens/>
    </TContext.Provider>)
}

export default App;
