import './App.css';
import moment from 'moment';
import Break from './components/Breaks';
import Session from './components/Session';
import Timer from  './components/Timer';
import {useState} from 'react';

function App() {

  const [breakCount, setBreakCount]=useState(300);
  const [count, setCount]=useState(60*25);
  const [minute, setMinute] = useState(count);
  const [title, setTitle] = useState("Session");

 
  return (
    <div className="App">
      25 + 5 Clock
      <Break setBreakCount={setBreakCount} breakCount={breakCount}/>
      <Session setCount={setCount} count={count}/>
      <Timer setBreakCount={setBreakCount} breakCount={breakCount} 
      setCount={setCount} count={count} minute={minute}
      setMinute={setMinute} title={title} setTitle={setTitle}/>
         </div>
  );
}

export default App;
