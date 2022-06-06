import '../App.css';
import {useState} from 'react';

export const Breaks = ({setBreakCount,breakCount}) =>{

        const addBreaks = () =>{
        setBreakCount(breakCount => breakCount+1);
        console.log("add "+breakCount);
    }

    const subtractBreaks = () =>{
        setBreakCount(breakCount => breakCount-1);
        console.log("subtract "+breakCount);
    }

    
    return(
        <>
                <h2 id="break-label">Break Length</h2>
                <img id="break-decrement" 
                src="https://www.seekpng.com/png/detail/80-802840_green-arrow-computer-icons-symbol-icon-design-green.png" 
                width="20px" height="20px"
                onClick={()=>subtractBreaks()}/>

                <div id="break-length">{breakCount}</div>

                <img id="break-increment" 
                src="https://www.pngitem.com/pimgs/m/29-297862_green-arrow-up-green-arrow-icon-png-transparent.png" 
                width="20px" height="20px"
                onClick={()=>addBreaks()}/>


                 <div></div>

            </>

    );
};


export default Breaks;