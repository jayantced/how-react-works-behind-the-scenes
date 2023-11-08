import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  console.log('dgfdfd');
  const [insertPara, setInsertPara] = useState(false)

  const addParaHandler = ()=> {
    setInsertPara((prevInsertPara) => !prevInsertPara);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {insertPara && <p>This is new!</p>}
      <Button onClick={addParaHandler}>Show Para</Button>
    </div>
  );
}

export default App;
