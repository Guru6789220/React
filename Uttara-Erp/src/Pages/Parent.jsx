import { useCallback, useState } from "react";
import Child from "./child";

const Parent=()=>{
    const[text,setText]=useState("");
    const handleClick=()=>{
        console.log("Hello");
};

    console.log("Parent Rendered");

    return(<>
        <h1>Parent Component</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <Child onClick={handleClick} />
    </>)
};

export default Parent;