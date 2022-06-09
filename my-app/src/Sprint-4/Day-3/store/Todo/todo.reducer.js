import {

    ADD_TODO_SUCCESS,
    ADD_TODO_LOADING,
    ADD_TODO_ERROR,
    COMPLETE_TODO,
    DELETE_TODO,
    GET_TODOS_ERROR,
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    UPDATE_TODO,

} from './todo.types';


const initalState = {
  
  addTodo:  {  
    loading : false,
    error: false,
    data:{},
  },
  getTodos:{
    loading : false,
    error: false,
    data:[],
  }
       
};


export const todoReducer = (state = initalState, {type , payload}) => {
    switch (type) {
        case GET_TODOS_LOADING:{
            return {
                ...state,
                getTodos:{
                    ...state.addTodo,
                    loading: true,
                },
             };
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
               getTodos: {
                   ...state.getTodos,
                 loading:false,
                data:payload,
               }
            }
        }
        
        case GET_TODOS_ERROR:{
            return {
                ...state,
              getTodos: 
              {
                  ...state.getTodos,
                  loading:false,
                error:true,
            }
        }
    }
         
         case ADD_TODO_LOADING:{
            return {
               ...state,
               addTodo:{
                   ...state.addTodo,
                   loading: true,
               },
            };
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                getTodos:{
                    data: [...state.getTodos.data,payload],
                },
                addTodo:{
                    loading:false,
                },
            }
        }
        
        case ADD_TODO_ERROR:{
            return {
                ...state,
                addTodo:{
                loading: false,
                },
            };
         }
       
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