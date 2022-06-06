import './App.css';
import Break from './components/Breaks';
import Session from './components/Session';
import Timer from  './components/Timer';
import {useState} from 'react';

function App() {

  const [breakCount, setBreakCount]=useState(5);
  const [count, setCount]=useState(25);
 
  return (
    <div className="App">
      25 + 5 Clock
      <Break setBreakCount={setBreakCount} breakCount={breakCount}/>
      <Session setCount={setCount} count={count}/>
      <Timer breakCount={breakCount} count={count}/>
         </div>
  );
}

export default App;
