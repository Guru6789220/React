import { useState,useEffect } from "react";
import useFetchData from "../Hooks/useFetchData";

const Home=()=>{
    const {data,loading,error}=useFetchData("");
    return(
        <div>
            <h2>Welcome to Uttara ERP System</h2>
        </div>
    )
}
export default Home;