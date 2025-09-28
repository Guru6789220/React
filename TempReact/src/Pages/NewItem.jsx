import { useState } from "react";
const NewItem=({Items,setItems})=>{
    const[newItem,setNewItem]=useState({
        Name:"",
        Qty:"",
        Price:""
    });

    const handleSubmit=(e)=>{
        debugger
       e.preventDefault();
        const newItems={
            ...NewItem,
            Id:Items.length+1,
            Name:newItem.Name,
            Qty:newItem.Qty,
            Price:newItem.Price,
            Status:true
        };

        setItems((prev)=>[...prev,newItems]);

        
      setNewItem({
        Name:"",
        Qty:"",
        Price:""
      })
        
    }
    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mt-1 mb-2">
                <div className="col-lg-2 text-end">
                    <label className="form-label">Item Name : </label>
                </div>
                <div className="col-lg-3">
                    <input type="text" className="form-control" placeholder="Item Name ......" autoFocus tabIndex={1} value={newItem.Name} onChange={(e)=>setNewItem((prev)=>({...prev,"Name":e.target.value}))} />
                </div>
                <div className="col-lg-2 text-end">
                    <label className="form-label">Qty : </label>
                </div>
                <div className="col-lg-3">
                    <input type="text" className="form-control" placeholder="0.0" tabIndex={2} value={newItem.Qty} onChange={(e)=>setNewItem(prev=>({...prev,"Qty":e.target.value}))} />
                </div>
            </div>
            <div className="row mt-1 mb-2">
                <div className="col-lg-2 text-end">
                    <label className="form-label">Price : </label>
                </div>
                <div className="col-lg-3">
                    <input type="text" className="form-control" tabIndex={3} value={newItem.Price} onChange={(e)=>setNewItem(prev=>({...prev,"Price":parseFloat(e.target.value || '0')}))} />
                </div>
                <div className="col-lg-2">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default NewItem;