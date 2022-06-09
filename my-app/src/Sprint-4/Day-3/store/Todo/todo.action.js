import {
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO ,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    GET_TODOS_LOADING,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR
 } from "./todo.types";
 import axios from "axios";

//for Get data here
    export const getTodos = (dispatch) =>{
      dispatch({ type:GET_TODOS_LOADING}); //this time is wating
       return axios 
       .get("http://localhost:8080/todos")
        .then((r) => {
                setTimeout(() => {
          dispatch({ type:GET_TODOS_SUCCESS , payload:r.data}); //this time success
              },1000)
             })

        .catch(() => {
          dispatch({ type:GET_TODOS_ERROR}); //if this time geting error
          })
      }

  //for post data from here
  
  export const addTodo = (dispatch ,payload) =>{
    dispatch({ type:ADD_TODO_LOADING}); //this time is wating
     return axios 
     .post("http://localhost:8080/todos" , payload)
      .then((r) => {
          dispatch({ type:ADD_TODO_SUCCESS , payload:r.data}); //this time success
        })

      .catch(() => {
        dispatch({ type:ADD_TODO_ERROR }); //if this time geting error
        })
    }

   //todo App
  

   export const completeTodo = (id) => ({type: COMPLETE_TODO, id});
   export const updateTodo  = (payload) => ({type: UPDATE_TODO , payload});
   export const deleteTodo = (id) => ({type: DELETE_TODO , id }) 