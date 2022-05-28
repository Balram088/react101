import React from "react";
import { useState } from "react";
import "./Styled/Todo.css"; 
import TodoItem from "./TodoItem";



const Todo = () => {
    let [value , setValue] = useState("");
    const [todos , setTodos] = useState([]);

    const onDelete = (id) =>{
        let newTodos = newTodos = todos.filter(todo => todo.id!==id)
        setTodos(newTodos);

    return (
        <div>
            <div  class="todo">
            <h1>TODO</h1>
            <input class="Add_input" value={value} onChange={(e) => setValue(e.target.value) } placeholder="Add More Task Here" />
            <button
            class="Call_button"
          disabled={!value}
         onClick={() =>{
         setTodos([...todos, {id:Date.now() ,  value :value}]);
         setValue("");
          }}
            >
               +
            </button>
            <div>
              

            {todos.map((todo) =>(
           <TodoItem key={todo.id}  todo={todo}  onDelete={onDelete}/>
            ) )}
            </div>
        </div>
        </div>
    );
}}
export default Todo;