import '../App.css';
import { useEffect, useState } from 'react';

export const Timer = ({setBreakCount, breakCount, setCount, count}) =>{


    let min = count;
    let sec = 0;

    useEffect(()=>{
    
        let interval = setInterval(()=>{
            clearInterval(interval);

            if(sec === 0){
                if(min!==0){
                    sec=59;
                    min=min-1;
                }
            }
        }, 1000);

    }, sec)
 
    const start_stop = () =>{}

    const reset = () =>{
        setBreakCount(5);
        setCount(25);
        console.log("Session: "+count+"  Break: " +breakCount);
    }


    return(
        <>
                <div id="timer-label">
                    Session    
                </div>
                <div id="time-left">
                   {min}:{sec}
                </div>

                <img id="start_stop"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Play_Pause_icon_2283501.svg/1200px-Play_Pause_icon_2283501.svg.png"
                  width="100px" height="100px" onClick={()=>start_stop()}/>

                <img id="reset"
                 src="https://cdn-icons-png.flaticon.com/512/61/61444.png"
                  width="85px" height="85px" onClick={()=>reset()}/>


            </>

    );
};


export default Timer;