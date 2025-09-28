import { useState } from "react";
import {FaTrash} from "react-icons/fa";

const ItemList=({Items,handleCheck,handleDelete})=>{

    return(
        <>
            <header>List Of Items</header>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Item's</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Items.map((items,index)=>(
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" checked={items.Status?true:false} onChange={(e)=>handleCheck(items.Id)}></input>
                                </td>
                                <td><label type="button" onClick={(e)=>handleCheck(items.Id)} >{items.Name}</label></td>
                                <td>{items.Qty}</td>
                                <td>{items.Price.toFixed(2)}</td>
                                <td>
                                    <FaTrash role="button" style={{color:"red"}} onClick={(e)=>handleDelete(items.Id)}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <label>Total Amount : </label>
                        </td>
                        <td>
                            {
                                Items.reduce((sum,i)=>(sum+(i.Status?i.Price:0)),0).toFixed(2)
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        
        </>
    )
}

export default ItemList;