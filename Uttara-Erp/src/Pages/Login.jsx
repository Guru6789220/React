import { useState } from "react";
import "../assets/Styles/Login.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Captcha from "../Components/Common/Captcha";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);


  const [formData,setformData]=useState({
    username:"",
    password:"",
    isvalidcaptcha:false
  });

  const handleSubmit=(e)=>{
    e.preventDefault();

    const {name,value}=e.target;
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
            <div className="col-lg-10 text-end">
              <p>Forget Password ?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
                 <Captcha Validatecaptcha={(e)=>(setformData((prev)=>({...prev,isvalidcaptcha:e})))}/>
            </div>
          </div>
           
          <div className="mt-2 row">
            <div className="col-lg-12 text-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>


      </form> 
        </div>
      </div>
    </>
  );
};

export default Login;
