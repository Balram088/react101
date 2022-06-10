import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { addCount , subCount , divCount , mulCount } from '../Counter/action';
import styled from 'styled-components' ;

const Wrapper = styled.div`
html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  

  
  .div {
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }
  input{
      background-color:black;
      border:none;
      color:white;
      height: 80px;
      width:500px;
      margin-top:0px;
      font-size:50px;
  }
  
  h1{
    text-align:center;
    width: 100%;
    font-size: 50px;
    height: 80px;
    width:500px;
    border: none;
    background-color: #252525;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
    margin-bottom:0px;
  }
  
  button {
    height: 60px;
    width:130px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    color: #333;
    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);
  }
  
  button:hover {
    background-color: #eaeaea;
  }
  
  .operator {
    color: #337cac;
  }

  
  }
`
const Counter = () =>{
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.count) 

    const [data,setData]=React.useState("")
    
 return (
    <Wrapper>
     <div>
        
         <h1>{counter}</h1> <br/>
         <input type="number" value={data}  onChange={(e) =>{setData(e.target.value)}}></input><></><br/>

         <button onClick={()=>{dispatch(addCount(data)).setData("") }}>+</button>
         <button class="operator" onClick={ () => {dispatch(subCount(data)).setData()}}>-</button>
         <button class="operator" onClick={ () => {dispatch(divCount(data)).setData()}}>÷</button>
         <button class="operator"  onClick={ () => {dispatch(mulCount(data)).setData()}}>*</button>
         <br/>
         {/* <button class="operator"  onClick={ () => {dispatch(setData(data+"7"))}}>7</button> */}
         <button class="operator" onClick={()=>{setData(data+"7")}} >7</button>
         <button class="operator"onClick={()=>{setData(data+"8")}} >8</button>
         <button class="operator" onClick={()=>{setData(data+"9")}} >9</button>
         <br/>
         <button class="operator" onClick={()=>{setData(data+"4")}} >4</button>
         <button class="operator" onClick={()=>{setData(data+"5")}} >5</button>
         <button class="operator" onClick={()=>{setData(data+"6")}} >6</button>
         <br/>
         <button class="operator" onClick={()=>{setData(data+"1")}}>1</button>
         <button class="operator" onClick={()=>{setData(data+"2")}} >2</button>
         <button class="operator" onClick={()=>{setData(data+"3")}} >3</button>
         <br/>
         <button class="operator" onClick={()=>{setData(data+"0")}}>0</button>
         <button class="operator" onClick={()=>{setData(data)}} >=</button>
         <button class="operator" onClick={()=>{setData("")}} >×</button>
        <button class="operator"  onClick={ () => {dispatch(mulCount("")).setData("")}}>Clear</button>
         <br/>
       
     </div>
     </Wrapper>
 )
}
export {Counter}