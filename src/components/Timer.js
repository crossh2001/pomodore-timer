import '../App.css';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useEffect, useRef, useState } from 'react';
import clip from "./mixkit-sport-start-bleeps-918.wav";

momentDurationFormatSetup(moment)



export const Timer = ({ setBreakCount, breakCount, setCount, count, minute, setMinute, 
title, setTitle}) => {
  //const [title, setTitle] = useState("Session");
  let interval = useRef();

  let min = count;
  let bmin= breakCount;
  
  const beeping = new Audio(clip);

  const formattedTimeLeft = moment.duration(minute, 's').format('mm:ss',{trim: false});
  
  useEffect(()=>{
    min=count;
    setMinute(count);
  }, [count])


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

            if (minute > 0) {
              minute = minute-1;
                

                setMinute(minute);
              
            } else {

              if(title == "Session"){
                
                console.log("test 1 got called title="+title);
                  title="Break";  
                  minute=breakCount;
                  setTitle("Break");
                  setMinute(minute);
              }else{
                console.log("test got called title="+title);
                title="Session";
                minute=count;
                setTitle(title);
                setMinute(minute);
              }
            }

            if(minute == 0){
              beeping.play();
            }


          }, 1000);
        }else{
          toggle=toggle+1;
        }
    console.log(interval, 'interval');
  };

  const reset = () => {
    clearInterval(interval.current);
    setBreakCount(300);
    setCount(1500);
    setTitle("Session");
    setMinute(1500);
  };

  return (
    <>
      <div id="timer-label">{title}</div>
      <div id="time-left">
        {formattedTimeLeft}
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
