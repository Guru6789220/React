import {useState} from "react";

const useForm=(initialValue)=>{
    const[formData,setFormData]=useState(initialValue);

    const handlechange=(e)=>{
        debugger
            const{name,value}=e.target;
            setFormData((prev)=>({
                ...prev,
                [name]:value
            }));              
    }

  

    const restForm=()=>{
        setFormData(initialValue);
    }

    return{
        formData,handlechange,restForm,setFormData
    }

}

export default useForm;