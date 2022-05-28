import React from 'react';
import { useEffect } from 'react';
import {useState} from "react";

const Todos = () => {
const [newTodo ,setNewTodo] = useState("");
const [todos , setTodos] = useState([]);

const saveInfo = () =>{
    fetch("http://localhost:3000/todos",{
        method:"POST",
        headers:{
             "content-type": "application/json",
        },
        body:JSON.stringify({
            text:newTodo,
            isCompleted:false,
        })
    })
    .then((r) => r.json())
    .then((d) => {
        setTodos([...todos,d]);
        setNewTodo("");
        
        
    });
};

useEffect(() => {
  fetch("http://localhost:3000/todos")
  .then((r) => r.json())
  .then((d) => {
    // console.log(d)
      setTodos(d);
  });
  },[]);
 
 return (
   
   <div>
   <h1>Todos</h1>
   <div>
  <input 
   value={newTodo}
  onChange={({ target }) => setNewTodo(target.value)}
  />

  <button onClick={saveInfo}>+</button>
  </div>
  {todos.map((todo) => (
      <div key={todo.id}>{todo.text}</div>
  ))}
  </div>
    
     
  )
}


export default Todos;
