import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/Styles/App.css'
import Login from "./Pages/Login.jsx";
import { Route, Routes } from 'react-router';

function App() {

  return (
    <>
     <Routes>
      <Route path="Login" element={<Login/>}></Route>
     </Routes>
    </>
  )
}

export default App
