import { ADD_COUNT ,SUB_COUNT , DIV_COUNT ,MUL_COUNT } from "./action";

const initState ={
    count:10
}
const CounterReducer=(state=initState,action )=>{   
    switch (action.type){
        case ADD_COUNT : return {...state,count: state.count+Number(action.payload)}
            case SUB_COUNT :   return {...state,count: state.count-Number(action.payload)}
            case DIV_COUNT :return {...state,count: state.count/Number(action.payload)}
            case MUL_COUNT :return { ...state,count: state.count*Number(action.payload) }
           default : return state;
        }}

 
export {CounterReducer}
