

export const reducer = (
    state = {
        count:0,
    },
    action 

)=>{
console.log(state,action);
if(action.type === "add"){
    state.count++;
}
return {...state};
};