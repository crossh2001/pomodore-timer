import '../App.css';
import moment from 'moment';
import {useState} from 'react';

export const Breaks = ({setBreakCount,breakCount}) =>{

        const addBreaks = () =>{
        if(breakCount<3600){
            setBreakCount(breakCount => breakCount+60);
        }else{
            setBreakCount(3600);
        }
    }

    const subtractBreaks = () =>{
        if(breakCount>60){
            setBreakCount(breakCount => breakCount-60);
        }else{
            setBreakCount(60);
        }
    }

    const breakLengthInMinute = moment.duration(breakCount, 's').minutes();
    
    return(
        <>
                <h2 id="break-label">Break Length</h2>
                <img id="break-decrement" 
                src="https://www.seekpng.com/png/detail/80-802840_green-arrow-computer-icons-symbol-icon-design-green.png" 
                width="20px" height="20px"
                onClick={()=>subtractBreaks()}/>

                <div id="break-length">{breakLengthInMinute}</div>

                <img id="break-increment" 
                src="https://www.pngitem.com/pimgs/m/29-297862_green-arrow-up-green-arrow-icon-png-transparent.png" 
                width="20px" height="20px"
                onClick={()=>addBreaks()}/>


                 <div></div>

            </>

    );
};


export default Breaks;