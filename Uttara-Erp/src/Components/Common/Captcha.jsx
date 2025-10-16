import "../../assets/Styles/Captcha.css";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Captcha = ({Validatecaptcha}) => {
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const [Captcha, setcaptcha] = useState(() => generateCaptcha());
  const [ECaptcha, setECaptcha] = useState("");

const handleValidatecaptcha=(e)=>{
const{value}=e.target;
setECaptcha(value);
  if(value===Captcha){
    Validatecaptcha(true);
    alert("Captcha Matched");
  }
  else{
    Validatecaptcha(false);
  }
}

  return (
    <>
      <span className="d-flex">
        <div className="CaptchaCode">{Captcha}</div>
        <FaArrowRotateRight
          role="button"
          className="btn btnreload"
          onClick={(e)=>setcaptcha(generateCaptcha())}
        />
      </span>
      <input type="text" className="form-control mt-2" placeholder="Captcha" name="ECaptcha" value={ECaptcha} onChange={handleValidatecaptcha} />
    </>
  );
};

export default Captcha;
