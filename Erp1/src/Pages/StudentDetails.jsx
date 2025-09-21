import React,{useState,useEffect} from "react";
import "../assets/Styles/studentDetails.css";

const StudentDetails=()=>{
    const[studentDetails,setStudentDetails]=useState([]);

    // useEffect(()=>{
    //     try{
    //     fetch("http://localhost:3000/StudentDetails")
    //     .then(response=>response.json())
    //     .then((d)=>{
    //         debugger
    //             if(d!=null)
    //             {
    //                 setStudentDetails(d);
    //             }
    //             else{
    //                 setStudentDetails([]);
    //             }
    //     })
    //     }
    //     catch(error)
    //     {(console.log(error));
    //     }
    // },[])


    useEffect(()=>{
        console.log("start");
        const FetchwithAsync=async ()=>{
            const response=await fetch("http://localhost:3000/StudentDetails");
            const data=await response.json();
            console.log(data);
            setStudentDetails(data);
        }
        FetchwithAsync();
        console.log("end");
    },[]);

    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-lg-10 d-flex justify-content-center">
                        <h4>List Of Student's</h4>
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-primary rounded-2" onClick={(e)=>{e.preventDefault();window.location.href = '/StudentRegister';}}>New Student</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="grdcontainer">
                            <table className="table">
                                <thead className="thead customthead">
                                    <tr>
                                        <th scope="col">SLNO</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Father Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentDetails.length>0 ?(
                                       studentDetails.map((std,index)=>(
                                        <tr key={std.ID || index}>
                                        <td>{index+1}</td>
                                        <td>{std.Name}</td>
                                        <td>{std.FatherName}</td>
                                        <td>{std.MobileNo}</td>
                                        <td>{std.Email}</td>
                                        <td>{std.Address}</td>
                                       </tr>
                                       )) 
                                    ):(
                                        <tr>
                                            <td colSpan="6">
                                            <p className="text-danger">No Records Found</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentDetails;