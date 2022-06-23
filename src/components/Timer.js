import '../App.css';
import { useEffect, useRef, useState } from 'react';
import clip from "./mixkit-sport-start-bleeps-918.wav";

export const Timer = ({ setBreakCount, breakCount, setCount, count }) => {
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("Session");
  let interval = useRef();

  let min = count;
  let bmin= breakCount;
  let sec = seconds;
  let changeTitle = 0;
  const beeping = new Audio(clip);
  const session_length = min;
  const break_length = bmin;

  if(sec<10){
    sec="0"+seconds;
  }
  
  if(min<10){
    min="0"+min;
  }

  if(bmin<10){
    bmin="0"+bmin;
  }


  let toggle = 0;
  
  const start_stop1 = () => {

    if(toggle>1){
      toggle=0;
    }else{
      toggle=1+toggle;
    }

    clearInterval(interval?.current);
        if(toggle==0){
          interval.current = setInterval(function () {
            console.log(min + ' : ' + sec);

            if(changeTitle>1){
              changeTitle=0;
            }

            if(changeTitle==0){
                setTitle("Session");
            }else{
              setTitle("Break");
            }            


            if (sec == 0) {
              if (min != 0) {
                sec = 59;
                min = min - 1;
                setCount(min);
              }else{
                if(sec==0){
                  if(bmin != 0){
                    sec = 59;
                    bmin = bmin - 1;
                    setSeconds(59);
                    setBreakCount(bmin);
                    
                  }
                }
              }
            } else {
              sec = sec - 1;
              setSeconds(sec);
            }

            if(sec== 0 && min == 0){
              beeping.play();
              changeTitle=1;
              bmin=break_length;
            }

            console.log("after loop bmin "+bmin);

            if(sec== 0 && bmin == 0){
              beeping.play();
              changeTitle=0;
              min=session_length;
            }

            console.log("after loop min is "+min);

          }, 1000);
        }else{
          toggle=toggle+1;
        }
    console.log(interval, 'interval');
  };

  const reset = () => {
    clearInterval(interval.current);
    setBreakCount(5);
    setCount(25);
    setSeconds(0);
    setTitle("Session");
    console.log('Session: ' + count + '  Break: ' + breakCount);
  };

  return (
    <>
      <div id="timer-label">{title}</div>
      <div id="time-left">
        {min}:{sec}
        <audio id="beep">
          <source src="./mixkit-sport-start-bleeps-918.wav" />
        </audio>
      </div>

      <img
        id="start_stop"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Play_Pause_icon_2283501.svg/1200px-Play_Pause_icon_2283501.svg.png"
        width="100px"
        height="100px"
        onClick={() => start_stop1()}
      />

      <img
        id="reset"
        src="https://cdn-icons-png.flaticon.com/512/61/61444.png"
        width="85px"
        height="85px"
        onClick={() => reset()}
      />
    </>
  );
};

export default Timer;
