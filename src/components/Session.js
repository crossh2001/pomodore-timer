import '../App.css';
import moment from 'moment';
import {useState} from 'react';

export const Session = ({setCount, count}) =>{


    const addSession = () =>{
     //   if(count<60){
            setCount(count => count+60);
            console.log("add Session"+count);
       // }else{
         //   setCount(60);
        //}
    }

    const subtractSession = () =>{
        //if(count>1){
            setCount(count => count-60);
            console.log("subtract Session"+count);
        //}else{
         //   setCount(1);
       // }
    }

    const sessionLengthInMinute = moment.duration(count, 's').minutes();

    return(
        <>
                <h2 id="session-label">Session Length</h2>
                <img id="session-decrement" 
                src="https://www.seekpng.com/png/detail/80-802840_green-arrow-computer-icons-symbol-icon-design-green.png"
                 width="20px" height="20px" onClick={()=>subtractSession()}/>

                <div id="session-length">{sessionLengthInMinute}</div>

                <img id="session-increment" 
                src="https://www.pngitem.com/pimgs/m/29-297862_green-arrow-up-green-arrow-icon-png-transparent.png"
                 width="20px" height="20px" onClick={()=>addSession()}/>

                 <div></div>

            </>

    );
};


export default Session;