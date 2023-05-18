import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await fetch('http://localhost:8080/api');
    const data = await response.json();
    setMessage(data.message);
  };

  const handlePost = async () => {
    const response = await fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'PRÓBA' }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleClick}>API hívás</button>
      <p>{message}</p>
      <button onClick={handlePost}>Adat küldése a szerverre</button>
    </div>
  );
}

export default App;
