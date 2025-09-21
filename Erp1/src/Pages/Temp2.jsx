import React from "react";

const Temp2=({CountPlus})=>{
    return(
            <>
            <button onClick={CountPlus}>+</button>
            </>
    )
}

const Temp22=({count,setcount})=>{
        return(
            <button onClick={()=>(setcount(count-1))}>-</button>
        )
}

export  {Temp2,Temp22};