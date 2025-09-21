import React,{useState,useEffect} from 'react';
const Square=()=>{
    const [color,setcolor]=useState("");
    const[StudentDetails,setStudentDetails]=useState("");
    const CustStyle={
        border:"1px solid red",
        width:"200px",
        height:"200px",
        margin:"0% 5% 0% 5%",
        background:color

    }
    useEffect(()=>{
            fetch("http://localhost:3000/StudentDetails")
            .then(res=>res.json())
            .then((data)=>{
                debugger
                if(data!=null)
                {
                    console.log(data[0].Name);
                }
            })
            .catch(console.error())
    });
 
    return(
        <>
        <div className="card" style={CustStyle}>
        </div>
        <br/>
        <div className="row">
            <div className="col-lg-3 mx-2">
            <input type="text" className='form-control' placeholder='Enter Color' onChange={(e)=>(setcolor(e.target.value))}  />
            </div>
        </div>
        
        </>
    );
}

export default Square;