import { Navigate } from "react-router";

const ProtectedRoute=({children})=>{
debugger
    const Token=localStorage.getItem("token");
   if(!Token || Token.trim()==="")
   {
    return <Navigate to="/Login" replace />
   }
   else{
    return children;
   }
}

export default ProtectedRoute;