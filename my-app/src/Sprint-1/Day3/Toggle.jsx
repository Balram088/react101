import { useState } from "react";
// import Counter from "../Day2/Counter";
// import Todo from "../Day2/Todo";
import "../Day2/Styled/Todo.css"; 
 


import React from 'react';

const Toggle = () => {

// set state of toggle
    const [toggle,setToggle] = useState(true);

  return (
      <>
    <div>
        {/*when we will click on button toggle will be inactive which flase (condition change) */}
       <button  class="Call_button" onClick={() => setToggle(!toggle)}> Toggle </button>
      
    </div>
     {/* { toggle ? <Counter/> : 0 } */}
     </>
  )
}



export default Toggle
