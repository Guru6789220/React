import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/Styles/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import About from "./Pages/About";
import Square from "./Pages/Square";
import Welcome from "./Pages/Temp";
import Register from "./Pages/Register";
import StudentDetails from "./Pages/StudentDetails";
import StudentRegister from "./Pages/StudentRegister";
import {AuthProvider,UseAuth} from "./Context/AuthContext.jsx";
import Spinner from "./Components/Common/Spinner.jsx";
import Country from "./Pages/Country.jsx";
import Tempage from "./Pages/Tempage.jsx";
import GetCodes from "./Components/Common/getCodes.jsx";
import {ThemeProvider} from "./Context/ThemeContext.jsx";
import TempPage1 from './Pages/TempPage1.jsx';
function App() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <AuthProvider>
      <div className="PageWrapper">
        <div className="MainBody">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/demo1" element={<Square/>}/>
            <Route path="/Welcome" element={<Welcome />}/>
            <Route path="/Register" element={<Register/>}>Register</Route>
            <Route path="/StudentDetails" element={<StudentDetails/>}/>
            <Route path="/StudentRegister" element={<StudentRegister/>}/>
            <Route path="/Spinner" element={<Spinner/>}/>
            <Route path="/Country" element={<Country/>}/>
            <Route path="/Tempage" element={<Tempage/>}/>
            <Route path="/codes" element={<GetCodes/>} />
            <Route path="/Temppage" element={<TempPage1/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
      </AuthProvider>
      </ThemeProvider>
    </>
  );

  
}

export default App;
