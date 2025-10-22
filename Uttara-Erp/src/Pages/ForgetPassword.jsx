import { useState } from 'react';
import { toast } from 'react-toastify';
import GeneratePassword from '../utils/GeneratePassword.js';
import {useNavigate} from 'react-router-dom';

const ForgetPassword = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email==="")
        {
            toast.error("Enter Registered Email Address");
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        {
            toast.error("Enter Valid Email Address");
            return;
        }
        else{
            var newpassword=GeneratePassword(10);
            toast.success(`New Password sent to ${email}:${newpassword}`);
            setEmail("");
            navigate("/Login");
        }

    };
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className='card col-lg-4 col-11 mx-auto'>
            <div className='card-header'>
                <h4 className='text-center'>Forget Password</h4>
            </div>
            <div className="card-body">
                <div className="row mt-2 mb-2">
                    <div className="col-lg-10 mx-auto">
                        <label className="form-label">Email Address </label>
                        <input type="email" className="form-control" placeholder="Email Address...." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-lg-10 mx-auto text-center'>
                        <button type="submit" className='btn btn-primary'>Send</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </>
    );
};

export default ForgetPassword;