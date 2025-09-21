import React,{useState,useEffect} from "react";
const getCodes=()=>{
    const[code,setCode]=useState("");

    const handleGetCode=()=>{
        alert("hello World");
    }


    return(
        <>
        <div className="row">
            <div className="col-lg-12">
                <div className="input-group">
                    <input 
                      type="text"
                      className={`form-control`}
                      name="Code"
                      value={code}
                      autoComplete="off"
                    />
                    <span className="input-group-text p-0 m-0">
                        <button
                            className="btn btn-primary"
                            onClick={handleGetCode}
                        >
                            Get Code
                        </button>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default getCodes;