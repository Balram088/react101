export const ADD_COUNT =  "ADD_COUNT"
export const SUB_COUNT =  "SUB_COUNT"
export const DIV_COUNT =  "DIV_COUNT"
export const MUL_COUNT =  "MUL_COUNT"

export  const addCount = (data)=>{
    return {
        type: ADD_COUNT,
        payload:data

    }
}

export  const subCount = (data)=>{
    return {
        type: SUB_COUNT,
        payload:data

    }
}

export  const divCount = (data)=>{
    return {
        type: DIV_COUNT,
        payload:data

    }
}

export  const mulCount = (data)=>{
    return {
        type: MUL_COUNT,
        payload:data

    }
}