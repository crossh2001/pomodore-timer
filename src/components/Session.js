import '../App.css';

export const Session = () =>{

    const work = () =>{
        console.log("this works");
    }

    return(
        <>
                <h2 id="session-label">Session Length</h2>
                <img id="session-decrement" 
                src="https://www.seekpng.com/png/detail/80-802840_green-arrow-computer-icons-symbol-icon-design-green.png"
                 width="20px" height="20px" onClick={()=>work()}/>

                <div id="session-length">25</div>

                <img id="session-increment" 
                src="https://www.pngitem.com/pimgs/m/29-297862_green-arrow-up-green-arrow-icon-png-transparent.png"
                 width="20px" height="20px" onClick={()=>work()}/>

                 <div></div>

            </>

    );
};


export default Session;