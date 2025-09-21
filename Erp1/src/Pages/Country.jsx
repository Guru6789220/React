import {useState} from "react";
import useForm from "../Hooks/useForm";
import {useNavigate} from "react-router-dom";
import useGetCode from '../Hooks/useGetCode.jsx';

const Country=()=>{

    const naviagate=useNavigate();

    const handleExit=(e)=>{
        naviagate("/");
        e.preventDefault();
    }

    const{formData,handlechange,restForm,setFormData}=useForm({
        "CODE":"",
        "NAME":""
    });

    const{Code,HandleGetCode}=useGetCode("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("data saved");
    }

    const HandleGetcodes=()=>{
        const name=formData.name || "TempName";
        const Newcode=HandleGetCode(name);
        setFormData((prev)=>({
            ...prev,
            CODE:Newcode
        }));
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Country</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row mt-2 mb-2">
                    <div className="col-lg-5 d-flex justify-content-lg-end">
                        <label className="form-label">Country Code : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <div className="input-group">
                            <input type="text" 
                        className="form-control"
                        name="CODE"
                        value={formData.CODE||Code}
                        onChange={handlechange}
                        ></input>
                        <span className="input-group-text p-0">
                            <button type="button" className="btn btn-info rounded-2" onClick={HandleGetcodes}>Get Code</button>
                        </span>
                        </div>
                        
                        


                        
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-lg-5 d-flex justify-content-lg-end">
                        <label className="form-label">Country Name : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="text"
                        name="NAME"
                        className="form-control"
                        value={formData.NAME}
                        onChange={handlechange}
                        ></input>
                    </div>
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary col-lg-1 mx-1 my-1 rounded-2">Save</button>
                        <button type="button" className="btn btn-warning col-lg-1 mx-1 my-1 rounded-2" onClick={restForm}>Clear</button>
                        <button type="button" className="btn btn-danger col-lg-1 mx-1 my-1 rounded-2" onClick={handleExit}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </form>
    );
}
export default Country;