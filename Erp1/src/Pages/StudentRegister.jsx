import React,{useState} from "react";

const StudentRegister=()=>{

    const HandleSave=(e)=>{
        debugger
        e.preventDefault();
        // fetch('http://localhost:3001/items', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       name: 'Sample Item',
        //       price: 100,
        //       quantity: 5
        //     })
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('Item saved:', data);
        //   })
        //   .catch(error => {
        //     console.error('Error saving item:', error);
        //   });
        try{
          fetch("http://localhost:3000/StudentDetails",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                    "ID":2,
                    "Name":"GUNA",
                    "FatherName":"GUNA",
                    "MobileNo":"9865321467",
                    "Email":"Guna@gmail.com",
                    "Address":"Banglore-97"
            })
          })
          .then(respons=>respons.json)
          .then((d)=>d);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <div className="card">
            <div className="card-header">
                <h3>Student Registration </h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <button className="col-lg-1 rounded-2 btn btn-primary" onClick={HandleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentRegister;