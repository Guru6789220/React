import { useState, useEffect } from "react";

function TempPage1() {

    const FetchData= async()=>{
       const data= await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(await data.json());
    }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default TempPage1;
