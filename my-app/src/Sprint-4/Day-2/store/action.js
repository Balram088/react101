
import { DECREMENT_COUNTER,
        INCREMENT_COUNTER,
        ADD_TODO,
        UPDATE_TODO,
        DELETE_TODO,
        COMPLETE_TODO 
    } from "./action.type";
    // export const getTodos = (dispatch) =>{
    //     dispatch({type: GET_TODOS_LODING });
    //     //this time is wating
    //     return axios
    //     .get("db")
    //     .then(r) =>
    // }


    //counter App
    export const counterInc = () => ({type: INCREMENT_COUNTER});
    export const counterDec = () => ({type: DECREMENT_COUNTER});

    //todo App
    export const addTodo = (payload) => ({type: ADD_TODO, payload});
    export const completeTodo = (id) => ({type: COMPLETE_TODO, id});
    export const updateTodo  = (payload) => ({type: UPDATE_TODO , payload});
    export const deleteTodo = (id) => ({type: DELETE_TODO , id }) 
    
