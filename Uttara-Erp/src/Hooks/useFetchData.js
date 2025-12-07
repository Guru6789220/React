import { useState,useEffect } from "react";

const useFetchData=(URL)=>{

    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
            const FetchData= async()=>{
                try{
                    const response=await fetch(URL,{
                        method:"GET",
                        headers:{
                            "Content_Type":"application/json",
                            "Authorization":`Bearer ${localStorage.getItem("token")}`
                        }
                    });

                    if(!response.ok)
                    {
                        const res=await response.json();
                        setData(res);
                        setError(null);
                    }
                    else{
                            setData(null);
                    }

                }
                catch(err)
                {
                    setError(err.Message);
                }
                finally{
                    setLoading(false);
                }
            }

            FetchData();

    },[URL]);

    return {data,loading,error};

}

export default useFetchData;