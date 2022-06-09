import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useRef } from 'react';
import { addTodo } from '../store/Todo/todo.action';

export const TodoApp = () => {
    const ref = useRef();
   const dispatch  = useDispatch();
   const todos = useSelector((state="") => state.todo.todos);

   const addNew = () => {
       let value = ref.current.value;
       console.log(value)
       dispatch(
           addTodo({
               value:value,
               isCompleted:false,
           })
       )
      
   }
    return (
    <div>

      <input  ref={ ref } type="text" placeholder='Type Here..'></input>
      <button onClick={addNew} >Add</button>
        <br />

        {todos.map((todo) =>
        <div key={todo.id}> {todo.value}</div>
        )}
    </div>
  )
}
