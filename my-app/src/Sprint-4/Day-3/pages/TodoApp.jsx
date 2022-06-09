import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useRef } from 'react';
import { addTodo, getTodos } from '../store/Todo/todo.action';
import { useEffect } from 'react';

export const TodoApp = () => {
    const ref = useRef();
   const dispatch  = useDispatch();
   const {loading ,  error, data:todos} = useSelector((state) => state.todo);

   const {loading:addButtonLoading} = useSelector (state => state.todo.addTodo)
   

   const addNew = () => {
       let value = ref.current.value;
      //  console.log(value)
      //  dispatch(
      //      addTodo({
      //          value:value,
      //          isCompleted:false,
      //      })
      //  )
      addTodo(dispatch,{
        value:value,
        isCompleted:false,
      });
      ref.current.value = null;
      
   }
   useEffect(() => {
     getTodos(dispatch);
    //  console.log(r);
    //  dispatch(getTodos());
   }, []);

   if(loading) return<h2>Wait Loding...</h2>;
   else if(error) return <h2>Somthing wrong...</h2>
    return (
    <div>

      <input  ref={ ref } type="text" placeholder='Type Here..'></input>
      <button onClick={addNew} disabled={addButtonLoading}>Add</button>
        <br />

        {todos.map((todo) =>
        <div key={todo.id}><h1> {todo.value} </h1></div>
        )}
    </div>
  )
}
