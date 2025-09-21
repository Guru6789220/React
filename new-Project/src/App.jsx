import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/Styles/App.css';
import Header from "./Components/Layout/Header.jsx";
import {Routes,Route, replace} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Home from "./Pages/Home.jsx";
import Cart from './Pages/Cart.jsx';

function App() {
  const [count, setCount] = useState(0);
  const[AuthToken,setAuthToken]=useState("null");

  return (
    <>
    
      {AuthToken!=null && <Header/>}
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path='/Home' element={<Cart/>}></Route>
      </Routes>

    </>
  )
}

export default App
