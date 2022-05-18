import { useState } from "react";
import Counter from "../Day2/Counter";
import Todo from "../Day2/Todo";

import React from 'react';

const Toggle = () => {

// set state of toggle
    const [toggle,setToggle] = useState(false);

  return (
    <div>
       <button onClick={() => setToggle(!toggle)}> Toggle </button>
       { toggle ? <Counter/> : <Todo/> }
    </div>
  )
}



export default Toggle
