import {createContext,useState,useMemo,usecallback} from "react";

export const AuthContext=createContext();

export const Authprovider=({children})=>{
    const[user,setuser]=useState({"Token":"","UserId":"","Roles":[]})

    return(
        <AuthContext.Provider value={{user,setuser}}>
            {children}
        </AuthContext.Provider>
    )

}

