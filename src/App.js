import React from 'react';
import './App.css';
import Login from './Login';

function App() {

  // const isDivideBy = (number, a, b) => {
  //   return (number % a === 0) && (number % b === 0);
  // }

  // console.log(`Is it divisible: ${isDivideBy(13, 6, 5)}`);


  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
