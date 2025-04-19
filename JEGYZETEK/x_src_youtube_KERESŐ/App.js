import React, { useState } from 'react';
import classes from './style.module.css'
import {data} from './data.js';

function App() {
const [search,setSearch] = useState('');
console.log(search);
  return (
  <div>
    
      <input onChange={(e)=>setSearch(e.target.value).toLocaleLowerCase()}
       placeholder='Keress...'></input>
    
    <table>
    <thead>
    <tr>
      <th>first_name</th>
      <th>last_name</th>
      <th>E-mail</th>
      <th>Phone</th>
      </tr>
</thead>
<tbody>
  {data.filter((item)=>{
    return search.toLocaleLowerCase === '' ? item :
    item.first_name/*.toLocaleLowerCase() kisbetűvel minden*/.includes(search)
  }).map((item)=>(
    <tr key={item.id}>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    </tr>
  ))}
</tbody>
    </table>
  </div>)
    
}

export default App;
