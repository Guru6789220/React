import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../assets/Styles/Header.css";
import {Link}  from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Collapse } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useTheme } from "../../Context/ThemeContext";
const Header = () => {

  const{theme,setTheme,ToggleTheme}=useTheme();

  const handleClick=(event)=>{
    event.preventDefault();
    alert("Hello Welcome Back");
  }

  const CloseNavbar=()=>{
    const navbar=document.getElementById("navbarColor01");
    if(navbar.classList.contains("show"))
    {
      new Collapse(navbar).toggle();
    }
  }

  console.log("Header Render");

  return (
    <header className="CustomHeader">
      <nav
        className="navbar navbar-expand-lg bg-primary p-1"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item d-flex justify-content-start">
                <Link to="/" onClick={CloseNavbar} ><span className="nav-link active">Home</span></Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
               <Link to="/about" onClick={CloseNavbar}>
                    <span className="nav-link">About</span>
               </Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
               <Link to="/demo1" onClick={CloseNavbar}>
                    <span className="nav-link">Demo 1</span>
               </Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
                <Link to="/Welcome" onClick={CloseNavbar}>Welcome</Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
                <Link to="/Register" onClick={CloseNavbar}>
                  <span className="nav-link">Register</span>
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
                <Link to="/StudentDetails" onClick={CloseNavbar}>
                  <span className="nav-link">Student Details</span>
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-start">
                <Link to="/Country" onClick={CloseNavbar}>
                  <span className="nav-link">Country</span>
                </Link>
              </li>
             <li className="nav-item d-flex justify-content-start">
                <Link to="/Spinner" onClick={CloseNavbar}>
                  <span className="nav-link">Spinner</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <button onClick={()=>ToggleTheme()} className="btn ">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
          <div className="Avator">
            <button onClick={handleClick} className="btnAvator">
          <Avatar sx={{width:"100%",height:"100%"}} alt="User" src="https://img.freepik.com/premium-vector/smiling-young-man-cartoon-portrait-with-glasses_477639-6954.jpg?w=740">N</Avatar>
          </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
