import { useState,useEffect } from "react";

const useGetCode=(Name)=>{


    const HandleGetCode = (Name) => {
       
        let RandomCode = Math.random().toString(36).substring(2,8).toUpperCase();
        return RandomCode;
}


    return{ HandleGetCode,
    }
}

export default useGetCode;