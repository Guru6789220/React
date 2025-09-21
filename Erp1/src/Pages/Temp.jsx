import React, { useState } from 'react';
import {Temp2,Temp22} from './Temp2';
const Temp = ({ name="guest" }) => {
  debugger;
  const[count,setcount]=useState(0);
  const Increment=()=>{setcount(count+1)}
  return (
    <>
      <h4>Welcome Back {name}</h4>
      <hr/>
      <h4>Increment {count}</h4>
      <Temp2 CountPlus={Increment} />
      <hr/>
      <h4>Incremen by sending count</h4>
      <Temp22 count={count} setcount={setcount}/>
    </>
  );
};


export default Temp;

