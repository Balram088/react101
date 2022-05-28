import React from "react";

const TodoItem = ({todo , onDelete}) => {
    const [isCompleted , setCompleted] = React.useState(todo.isCompleted);
    
  

  return (
    <div>
        <div   class="output">
               <input class="cheack_input"
                type="checkbox"
               checked={isCompleted} 
               onChange={(e) => {
                   setCompleted(e.target.checked);
                //    console.log(e.target.checked);
               }}
          />
           <div key={todo.id}>{todo.value} </div>
           <button onClick={() => onDelete(todo.id)}>delete</button>
</div>
    </div>
  )
}

export default TodoItem


