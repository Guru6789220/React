import { useState,useRef} from "react";
import Child1 from "./Child1.jsx";

const Parent1=()=>{

    const modelRef=useRef();

    const OpenModel=()=>{
        modelRef.current.ToggleModel();
    };

    return(<>
        <h1>Parent Component</h1>
        <Child1 ref={modelRef}></Child1>

        <button onClick={OpenModel}>Focus Child Input</button>



    </>)
}

export default Parent1;