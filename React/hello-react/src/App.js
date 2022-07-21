import React from 'react';
import Hello from './Hello';
import Component1 from './Component1';
import './App.css';

function App() {
  return (
    <div>
      <Hello name="name 변수" color="red"/>
      <Hello color="pink"/>
      <Component1></Component1>
    </div>
  );
}

export default App;
