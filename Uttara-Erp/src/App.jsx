import { useContext, useEffect } from "react";
import "./assets/Styles/App.css";
import Login from "./Pages/Login.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import { Route, Routes } from "react-router";
import { ToastContainer, Zoom } from "react-toastify";
import Home from "./Pages/Home.jsx";
import Header from "./Components/Layout/Header.jsx";
import { AuthContext } from "./Context/AuthContext.jsx";
import Parent from "./Pages/Parent.jsx";
import Timmer from "./Pages/Timmer.jsx";
import Parent1 from "./Pages/Parent1.jsx";
import TODO from "./Pages/TodoList.jsx";
import Search from "./Pages/Search.jsx";
import Pagination from "./Pages/Pagination.jsx";
import InfinatesQuery from "./Pages/InfinatesQuery.jsx";

function App() {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.TokenExpires) return;
  
    const interval = setInterval(() => {
      const now = Date.now();
      const expires = new Date(user.TokenExpires).getTime();
  
      if (now >= expires) {
        logout();
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [user]);
  

  return (
    <>
      {/* Show header only if user is logged in */}
      {user?.TokenExpires && <Header />}

      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Parent" element={<Parent />} />
        <Route path="/Timmer" element={<Timmer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Parent1" element={<Parent1 />} />
        <Route path="TODO" element={<TODO />} />
        <Route path="Search" element={<Search/>}/>
        <Route path="Pagination" element={<Pagination/>}/>
        <Route path="Infinate" element={<InfinatesQuery/>}/>
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
