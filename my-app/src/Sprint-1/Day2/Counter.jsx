import React from 'react';
import "./Styled/Todo.css"

const Counter = () => {

    const [count,setCount] = React.useState(0);
  return (
    <div class="todo">
        <h1>Counter App: {count} </h1>
        <button class="Call_button" onClick={() => setCount((count<5)?count+1:10)}>+</button>
        <button class="Call_button" onClick={() => setCount((count>0)?count-1:0)}>-</button>
    </div>
  )
}
export default Counter;
