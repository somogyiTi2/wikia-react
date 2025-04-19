import React, { useState,useEffect } from 'react';


function App() {
  

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p class="p_size">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );

}

export default App;
