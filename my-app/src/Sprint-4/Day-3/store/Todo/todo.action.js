import { ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO 
 } from "./todo.types";
   // export const getTodos = (dispatch) =>{
    //     dispatch({type: GET_TODOS_LODING });
    //     //this time is wating
    //     return axios
    //     .get("db")
    //     .then(r) =>
    // }


   //todo App
   export const addTodo = (payload) => ({type: ADD_TODO, payload});
   export const completeTodo = (id) => ({type: COMPLETE_TODO, id});
   export const updateTodo  = (payload) => ({type: UPDATE_TODO , payload});
   export const deleteTodo = (id) => ({type: DELETE_TODO , id }) 