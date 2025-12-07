import React from 'react';

 const Child=({onClick})=>{
    console.log("Child Rendered");
    return (<>
        <button onClick={onClick}>Child Button</button>
    </>)
};

export default React.memo(Child);
