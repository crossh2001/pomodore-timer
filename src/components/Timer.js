import '../App.css';

export const Timer = () =>{

    const work = () =>{
        console.log("this works");
    }


    return(
        <>
                <div id="timer-label">
                    Session    
                </div>
                <div id="time-left">
                    25:00
                </div>

                <img id="start_stop"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Play_Pause_icon_2283501.svg/1200px-Play_Pause_icon_2283501.svg.png"
                  width="100px" height="100px" onClick={()=>work()}/>

                <img id="reset"
                 src="https://cdn-icons-png.flaticon.com/512/61/61444.png"
                  width="85px" height="85px" onClick={()=>work()}/>


            </>

    );
};


export default Timer;