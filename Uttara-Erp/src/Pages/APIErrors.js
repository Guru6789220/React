import {toast} from "react-toastify";

const APIErrors=({response})=>{
    debugger;
    if(response.data.errors!==null)
    {
        if(response.data.errors && typeof response.data.errors==="object")
        {
            Object.values(response.data.errors).forEach((message)=>{

                if(response.status===400)
                {
                    toast.error(message); // bad request
                }
                else if(response.status===401)
                {
                    toast.error(message); // invalid credentials
                }
                else if(response.status===403)
                {
                    toast.error("Access denied.");  
                }
                else if(response.status===500)
                {
                    toast.error("Internal server error.");
                }
                else{
                    toast.error("Unexpected error occurred.");
                }
            });
        }
        else{
            toast.error(response?.data?.message || "Something went wrong. Please try again.");
        }
    }
    else{
        toast.error("Unexpected error occurred.");
    }
};
export default APIErrors;