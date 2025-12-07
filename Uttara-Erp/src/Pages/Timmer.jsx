import { useRef, useState } from "react";

const Timmer=()=>{
    const[seconds,setSeconds]=useState(0);
    const TimmerId=useRef(null);

    const count=useRef(0);

    const Start=()=>{
       TimmerId.current= setInterval(()=>{
            setSeconds((prev)=>prev+1);
            
        },1000);
        
    }

    const Stop=()=>{
        clearInterval(TimmerId.current);
        TimmerId.current=null;
    }

    const Reset=()=>{
        setSeconds(0);
         clearInterval(TimmerId.current);
        TimmerId.current=null;
       
    }

    count.current++;

    return(<>
        <h1>Stop Watch</h1>
        <h2>Seconds : {seconds}</h2>
        <br></br>
        <section>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
</section>
        <p>Render Count : {count.current}</p>
    </>)
};

export default Timmer;