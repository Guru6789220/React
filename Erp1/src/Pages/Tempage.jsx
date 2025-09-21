import { useState,useCallback } from "react";
import Buttoncom from "../Components/Common/buttonCom";

const Tempage=()=>{
    const[count,setCount]=useState(0);

    const handleclick=useCallback(()=>{
         setCount((prev)=>prev+1); 
    },[])
       
    

    console.log("Parent Render");
        return(
            <>
            <label>Count : {count}</label>
                <Buttoncom onclick={handleclick}></Buttoncom>
            </>
        )
}

export default Tempage