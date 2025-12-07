import { useContext, useState } from "react";
import "./assets/Styles/App.css";
import Login from "./Pages/Login.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import { Route, Routes } from "react-router";
import { ToastContainer, toast, Zoom } from "react-toastify";
import Home from "./Pages/Home.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Layout/Header.jsx";
import { AuthContext, Authprovider } from "./Context/AuthContext.jsx";
import Parent from "./Pages/Parent.jsx";
import Timmer from "./Pages/Timmer.jsx";
import Parent1 from "./Pages/Parent1.jsx";

function App() {
  const {user} = useContext(AuthContext);

  return (
    <>
      {user.Token!="" && user.Token!=null && (
        <Header></Header>
      )}
      <Routes>
        <Route path="/" index element={<Login />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/Parent" element={<Parent />}></Route>
        <Route path="/Timmer" element={<Timmer />}></Route>
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="Parent1" element={<Parent1 />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      </>
  );
}

export default App;
