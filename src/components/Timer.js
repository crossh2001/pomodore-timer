import '../App.css';
import { useEffect, useState } from 'react';

export const Timer = ({setBreakCount, breakCount, setCount, count}) =>{

    const [seconds, setSeconds] = useState(0);

    let min = count;
    let sec = seconds;
    

    /*useEffect(()=>{
    
        let interval = setInterval(()=>{
            clearInterval(interval);

            if(sec === 0){
                if(min!==0){
                    sec=59;
                    min=min-1;
                }
            }
        }, 1000);

    }, sec)*/

 
    /*const start_stop = () =>{
        let interval = setInterval(()=>{
            //clearInterval(interval);

            if(sec === 0){
                if(min!==0){
                    sec=59;
                    min=min-1;
                }
            }
        }, 1000);
    }*/

    const start_stop1 = () => {
        let interval = setInterval(start_stop, 1000);    
        console.log("function called");
        console.log(min+" : "+sec);
    }
    let interval = setInterval(start_stop, 1000);
        

    function start_stop(){
        clearInterval(interval);

            if(sec === 0){
                if(min!==0){
                    //sec=59;
                    //min=min-1;
                    setSeconds(59);
                    setCount(min-1);
                }
            }else{
                //sec=sec-1;
                setSeconds(sec-1);
            }
    }

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
                  width="100px" height="100px" onClick={()=>start_stop1()}/>

                <img id="reset"
                 src="https://cdn-icons-png.flaticon.com/512/61/61444.png"
                  width="85px" height="85px" onClick={()=>reset()}/>


            </>

    );
};


export default Timer;