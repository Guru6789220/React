import React from "react";
const Buttoncom=({onclick})=>{
    console.log("Child Render");
    return(
        <>
        <button className="btn btn-primary" onClick={onclick}>Click Me</button>
        </>
    )
}

export default React.memo(Buttoncom);
