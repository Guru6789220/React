import { useState,useRef } from "react";
import "../assets/Styles/Login.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Captcha from "../Components/Common/Captcha";
import { toast } from "react-toastify";
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const captchaRef=useRef(null);


  const [formData,setformData]=useState({
    username:"",
    password:"",
    isvalidcaptcha:false
  });

  const handleSubmit=(e)=>{
    debugger
    e.preventDefault();

    if(formData.username==="")
    {
      toast.error("User Name is required");
      return;
    }
    if(formData.password==="")
    {
      toast.error("Password is required");
      return;
    }
    if(!captchaRef.current.validateCaptcha())
    {
      toast.error("Invalid Captcha");
      return;
    }
  }

  const TooglePassword=()=>{
    setPasswordVisible(!passwordVisible);
  }

  return (
    <>
    
      <div className="card col-lg-4 col-11">
        <div className="card-header">
          <h4 className="text-center">Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <label className="form-label">User Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="UserName...."
                name="username"
                value={formData.username}
                onChange={(e)=>setformData({...formData,username:e.target.value})}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <label className="form-label">Password </label>
              <div className="input-wrapper w-100">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Type here..."
                  name="password"
                  value={formData.password}
                  onChange={(e)=>setformData({...formData,password:e.target.value})}
                />
                {passwordVisible ? (
                    <FaEye role="button" className="input-logo" onClick={TooglePassword} />
                ) : (
                    <FaEyeSlash role="button" className="input-logo" onClick={TooglePassword} />
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-11 text-end">
              <button type="button" className="btn btn-link" onClick={()=>navigate("/ForgetPassword")}>Forgot Password?</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
                 <Captcha ref={captchaRef} />
            </div>
          </div>
           
          <div className="mt-2 row">
            <div className="col-lg-12 text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </div>


      </form> 
        </div>
      </div>
    </>
  );
};

export default Login;
