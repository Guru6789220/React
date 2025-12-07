import { useState, useRef, useContext, useEffect } from "react";
import "../assets/Styles/Login.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Captcha from "../Components/Common/Captcha";
import { toast } from "react-toastify";
import { replace, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import api from "../Hooks/api.js";
import APIErrors from "./APIErrors.js";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const captchaRef = useRef(null);

  const { user, setuser } = useContext(AuthContext);

  const [formData, setformData] = useState({
    username: "",
    password: "",
    isvalidcaptcha: false,
  });

  const [formErrors, setformErrors] = useState({
    username: false,
    password: false,
  });

  useEffect(() => {
    setformErrors({
      username: false,
      password: false,
    });
  }, [formData.username, formData.password]);

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    if (formData.username === "") {
      setformErrors({ ...formErrors, username: true });
      toast.error("User Name is required");
      return;
    } else {
      setformErrors({ ...formErrors, username: false });
    }
    if (formData.password === "") {
      toast.error("Password is required");
      setformErrors({ ...formErrors, password: true });
      return;
    } else {
      setformErrors({ ...formErrors, password: false });
    }
    if (!captchaRef.current.validateCaptcha()) {
      toast.error("Invalid Captcha");
      return;
    }

    const LoginAPI = async () => {
      debugger;
      setLoggingIn(true);
      try {
        const response = await api.post(
          "Login/Login",
          {
            userName: formData.username,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success && response.status === 200) {
          setuser({
            Token: response.data.token,
            UserId: 1,
            Roles: [1, 2, 3],
          });

          toast.success(response.data.message);
        }
      } catch (err) {
        const res = err?.response;

        APIErrors({ response: res });
      } finally {
        setLoggingIn(false);
      }
    };

    await LoginAPI();
  };

  const TooglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div className="container-fluid LoginContainer">
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
                  className={`form-control ${
                    formErrors.username ? "form-error" : ""
                  }`}
                  placeholder="UserName...."
                  name="username"
                  value={formData.username}
                  autoComplete="off"
                  onChange={(e) =>
                    setformData({ ...formData, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <label className="form-label">Password </label>
                <div className="input-wrapper w-100">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className={`form-control ${
                      formErrors.password ? "form-error" : ""
                    }`}
                    placeholder="Type here..."
                    name="password"
                    value={formData.password}
                    autoComplete="off"
                    onChange={(e) =>
                      setformData({ ...formData, password: e.target.value })
                    }
                  />
                  {passwordVisible ? (
                    <FaEye
                      role="button"
                      className="input-logo"
                      onClick={TooglePassword}
                    />
                  ) : (
                    <FaEyeSlash
                      role="button"
                      className="input-logo"
                      onClick={TooglePassword}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-11 text-end">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => navigate("/ForgetPassword")}
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <Captcha ref={captchaRef} />
              </div>
            </div>

            <div className="mt-2 row">
              <div className="col-lg-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loggingIn}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
