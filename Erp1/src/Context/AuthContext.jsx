import { createContext,useContext,useState,useEffect } from "react";

const AuthContext=createContext();
export const UseAuth=()=>useContext(AuthContext);

export const AuthProvider=({children})=>{
    const[Token,setTokenState]=useState("");

    useEffect(()=>{
        const Tokens=localStorage.getItem("AuthToken");
        if(Tokens!=null)
        {
            setTokenState(Tokens);
        }
        else{
            setTokenState("");
        }
    },[]);

    

    return(
        <AuthContext.Provider value={{Token,setTokenState}}>
            {children}
        </AuthContext.Provider>
    )

}