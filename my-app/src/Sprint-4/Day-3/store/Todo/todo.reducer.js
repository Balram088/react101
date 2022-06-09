import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    UPDATE_TODO,

} from './todo.types';

export const todoReducer = (state = { todos: []}, {type , payload}) => {
    switch (type) {
        case ADD_TODO: 
            return {
                todos:[...state.todos,payload]
            }

            // state.todos.push({
            //     ...payload,
            //     id:state.todos.length,
            // })
            // return {...state};
       
       case DELETE_TODO: {
           return {...state};
       }
       case COMPLETE_TODO: {
           return {...state}; 
       }
       case UPDATE_TODO: {
           return {...state};
       }
       default:{
           return state;
       }
    }
}