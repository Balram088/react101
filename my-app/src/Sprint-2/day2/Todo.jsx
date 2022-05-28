import React from 'react';
import { useEffect } from 'react';
import {useState} from "react";

const Todos = () => {
    const [page,setPage ] =useState(1);
    const [totalCount , setTotalCount] = useState(0);
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
  fetch(`http://localhost:3000/todos?_page=${page}&_limit=3`)
  .then((r) => r.json())
  .then((d) => {
    // console.log(d)
      setTodos(d);
  });
  },[page]);
 
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

  <button disabled={page<= 1}
  onClick={() =>{
      if(page>1){
          setPage(page-1);
      }
  }}>{"<"}</button>
   <button 
  onClick={() =>{
      setPage(page+1);
    }}>{">"}</button>
  </div>
    
     
  )
}


export default Todos;
