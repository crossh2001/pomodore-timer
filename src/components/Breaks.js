import '../App.css';
import {useState} from 'react';

export const Breaks = () =>{

    const [count, setCount]=useState(5);
    //const count=5;

    const addBreaks = () =>{
        setCount(count => count+1);
        console.log("add "+count);
    }

    const subtractBreaks = () =>{
        setCount(count => count-1);
        console.log("subtract "+count);
    }

    
    return(
        <>
                <h2 id="break-label">Break Length</h2>
                <img id="break-decrement" 
                src="https://www.seekpng.com/png/detail/80-802840_green-arrow-computer-icons-symbol-icon-design-green.png" 
                width="20px" height="20px"
                onClick={()=>subtractBreaks()}/>

                <div id="break-length">{count}</div>

                <img id="break-increment" 
                src="https://www.pngitem.com/pimgs/m/29-297862_green-arrow-up-green-arrow-icon-png-transparent.png" 
                width="20px" height="20px"
                onClick={()=>addBreaks()}/>


                 <div></div>

            </>

    );
};


export default Breaks;