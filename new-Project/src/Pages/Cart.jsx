import { useState } from "react";

const Cart=()=>{
    const [products,setProucts]=useState([{Id:1,Name:"Moto G86",Price:"15999.00"},
        {Id:2,Name:"Moto G96",Price:"14999.00"},
        {Id:3,Name:"Vivo T4",Price:"17999.00"},
        {Id:4,Name:"IQOO Z10",Price:"21000.00"}
    ])

    const [Cart,setCart]=useState([]);

    const AddToCart=(item)=>{
        debugger
        const exist=Cart.some(c=>c.Id==item.Id);
        if(!exist)
        {
            setCart((prev)=>[...prev,{Id:item.Id}]);
        }
        else{
            Alert("Item Already Exist");
        }
    }
    return(
        <>
        <div>
            <p>Hello Cart</p>
            {
                products.map((item)=>(
                    <div className="card" key={item.Id}>
                        <div className="card-body">
                            <p>{item.Name}</p>
                            <p>{item.Price}</p>
                            <button onClick={()=>AddToCart(item)}>Add</button>
                        </div>
                    </div> 
                ))
            }
        </div>
        <br/>
        <table>
            <thead>
                <tr><td>SL NO</td></tr>
                <tr></tr>
            </thead>
        </table>
        </>
    )
};

export default Cart;