import React from 'react';
import CodeHighlighter from './CodeHighlighter';

const App = () => {
  const jsCode = `
    function greet(name) {
      console.log('Hello, ' + name + '!');
    }
    
    greet('World');
  `;

  return (
    <div>
      <h1>Code Highlighter Example</h1>
      <CodeHighlighter code={jsCode} />
      
    </div>
  );
};

export default App;