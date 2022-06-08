import React from 'react';
import { useDispatch , useSelector } from 'react';
import { useRef } from 'react';

export const TodoApp = () => {
    const ref = useRef();
   const dispatch  = useDispatch();
   const todos = useSelector((state) => state.todo.todos);

   const addNew = () => {
       let value = ref.current;
       console.log(value);
   }
    return (
    <div>

      <input ref={ ref } type="text" placeholder='Type Here..'></input>
      <button onClick={addNew} >Add</button>
        <br />

        {todos.map((todo) =>
        <div key={todo.id}> {todo.value}</div>
        )}
    </div>
  )
}
