import '../App.css';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useEffect, useRef, useState } from 'react';
import clip from "./mixkit-sport-start-bleeps-918.wav";

momentDurationFormatSetup(moment)



export const Timer = ({ setBreakCount, breakCount, setCount, count }) => {
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("Session");
  let interval = useRef();

  let min = count;
  let bmin= breakCount;
  let sec = seconds;
  
  const beeping = new Audio(clip);

  const [minute, SetMinute] = useState(min);

  const formattedTimeLeft = moment.duration(minute).format('mm:ss');
  
  useEffect(()=>{
    min=count;
    SetMinute(count);
  }, [count])
  if(sec<10){
    sec="0"+seconds;
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
                

            console.log("JUST testing out minute="+minute+" min="+
            min+" & bmin="+bmin+" title="+title);

            if (sec == 0) {
              
              if (min >= 0) {
                min = min-1;
                
                if(min<10){
                  min="0"+min;
                }

                SetMinute(min);
                sec = 59;
                setSeconds(sec);
              }else{
                if(sec==0){
                  if(bmin >= 0){
                        bmin = bmin - 1;
                        
                        if(bmin<10){
                          bmin="0"+bmin;
                        }

                        console.log("break got subtracted");

                        SetMinute(bmin);
                        sec = 59;
                        setSeconds(sec);                    
                  }
                }
              }
            } else {
              sec = sec - 1;
              setSeconds(sec);
            }

            if(sec == 0 && min == "00"){
              beeping.play();
              setTitle("Break");
              bmin=breakCount;
              SetMinute(bmin);
            }

            
            if(sec == 0 && bmin == "00"){
              beeping.play();
              setTitle("Session");
              min=count;
              SetMinute(min);
              console.log("code in Session");
              }


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
    SetMinute(25);
  };

  return (
    <>
      <div id="timer-label">{title}</div>
      <div id="time-left">
        {formattedTimeLeft}:{sec}
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
