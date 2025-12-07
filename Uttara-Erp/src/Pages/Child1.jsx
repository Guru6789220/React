import{useState,useRef,UseImperativeHandler,forwardRef, useImperativeHandle} from "react";

const Child1=forwardRef((props,ref)=>{
    const[Model,setModel]=useState(false);
    
    const ToogleModel=()=>{
        setModel((prev)=>!prev);
    }

    useImperativeHandle(ref,()=>({
         ToggleModel:ToogleModel
    }));

    if(!Model) return null;

    return(<>
        <div className="card">
            <div className="card-body">
                <h1>Child Component</h1>
                <button onClick={ToogleModel} >Close</button>
            </div>
        </div>
    </>);
})
export default Child1;