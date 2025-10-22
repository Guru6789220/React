import "../../assets/Styles/Captcha.css";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useEffect, useState,forwardRef,useImperativeHandle } from "react";

const Captcha =forwardRef ((prop,ref) => {
  const generateCaptcha = () => {
    var code=Math.random().toString(36).substring(2,8).toUpperCase();
    return code;
  };

  const [Captcha, setcaptcha] = useState(() => generateCaptcha());
  const[UserInput,setUserInput]=useState("");

  useImperativeHandle(ref,()=>({
    validateCaptcha:()=>{
        const isvalid=UserInput.toLowerCase()===Captcha.toLowerCase();
        return isvalid;
    }
  }));
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
      <input type="text" className="form-control mt-2" placeholder="Captcha"  value={UserInput} onChange={(e)=>setUserInput(e.target.value)} />
    </>
  );
});

export default Captcha;
