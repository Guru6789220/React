import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import{useState,useEffect} from "react";
import { toast } from "react-toastify";
import api from "../Hooks/api.js";

const TodoList=()=>{

     const queryClient = useQueryClient();
    const[todo,setTodo]=useState({id:"",itemName:"",createdDate:""});

   const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
        const res = await api.get("Todo");
        return res.data.data;
    },
    refetchOnWindowFocus: false
});


    const AddTodoMutation=useMutation({
        mutationFn:async({itemName})=>{
            const response=await api.post("Todo",{itemName:itemName},{headers:{"Content-Type":"Application/json"}});
            return response.data;
        },
        onSuccess:async (data)=>
        {
            debugger
            if(data.success)
            {
                toast.success("New Item Added");
                await queryClient.invalidateQueries(["todos"]);

                setTodo({id:"",itemName:"",createdDate:""});
            }
        },
        onError:(error)=>{
            debugger
        }
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todo.itemName=="")
        {
            toast.error("Enter Item To Add");
            return;
        }
        AddTodoMutation.mutate({
            itemName:todo.itemName
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header">TODO List</div>
                <div className="card-body">
                    <div className="row mt-2 mb-2">
                        <div ClassName="col-lg-9">
                            <input type="text" id="TodoItem" value={todo.itemName} onChange={(e)=>setTodo((prev)=>({...prev,itemName:e.target.value}))} />
                        </div>
                        <div className="col-lg-1">
                            <button type="submit" className="btn btn-Primary" >Add</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            {data?.map((t,index) => (
                    <li key={index}>{t.itemName}</li>
                ))}
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    )

}

export default TodoList;