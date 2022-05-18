import React from "react";
import { useState } from "react";
import "./Styled/Todo.css"; 



const Todo = () => {
    let [value , setValue] = useState("");
    const [todos , setTodos] = useState([]);

    return (
        <div>
            <div  class="todo">
            <h1>TODO</h1>
            <input value={value} onChange={(e) => setValue(e.target.value) } placeholder="Add More Task Here" />
            <button
          disabled={!value}
         onClick={() =>{
         setTodos([...todos, {value :value}]);
         setValue("");
          }}
            >
                +
            </button>
            <div>
            {todos.map((todo) =>(
                <div class="output">{todo.value}</div>
            ) )}
            </div>
        </div>
        </div>
    );
};
export default Todo;