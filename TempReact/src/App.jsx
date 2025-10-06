import { useEffect, useState } from 'react'
import './App.css'
import ItemList from './Pages/ItemList'
import NewItem from './Pages/NewItem'
import ColorPicker from './Pages/colorPicker'

function App() {
  const [Items, setItems] = useState(JSON.parse(localStorage.getItem("Grocery"))||[]);

  useEffect(()=>{
    localStorage.setItem("Grocery",JSON.stringify(Items));
  },[Items])
  
  const handleCheck=(Id)=>{
      setItems(prev=>prev.map((items)=>items.Id==Id?{...items,Status:!items.Status}:items))
  }
  
  const handleDelete=(Id)=>{
      setItems(Items.filter((i)=>i.Id!==Id));
  }
  
  return (
    <>
    <NewItem Items={Items} setItems={setItems} />
      <ItemList 
      Items={Items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <ColorPicker/>
    </>
  )
}

export default App
