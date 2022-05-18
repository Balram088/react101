import React from 'react';
import "./Styled/Todo.css"

const Counter = () => {

    const [count,setCount] = React.useState(0);
  return (
    <div class="todo">
        <h1>Counter App: {count} </h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount((count>0)?count-1:0)}>-</button>
    </div>
  )
}
export default Counter;
