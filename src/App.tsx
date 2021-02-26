import React from 'react';
import './App.css';
import ExpampleInterface  from "./components/expampleInterface";
import StartWin from "./components/StartWinComponent/StartWin";

function App() {
  return (
    <div className="App">
        <StartWin left={<ExpampleInterface/>}/>
    </div>
  );
}

export default App;
