import logo from './logo.svg';
import './App.css';
import { InputHendler } from './Components/InputHendler';
import { useState } from 'react';
import OutputHendler from './Components/OutputHendler';

function App() {
  const [Data, SetData] = useState([]);/*fontos, hogy [] mert ha nem üres tömb akkor nem lehet []-elni illetve alap értékének kell mindenképp lennie*/

  const IdMaker = (ExportData) => {
    console.log(ExportData);
    SetData([ExportData, ...Data]);
  }

  return (
    <div>
      <InputHendler  IdMaker={IdMaker} />
      <OutputHendler Data={Data}/>
    </div>
  );
}

export default App;
