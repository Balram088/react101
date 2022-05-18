import React from 'react'
import UsingProps from './UsingProps';

let info =[
    {name:"Jiten"},
    {name:"Bhanu Pratap"},
    {name:"jai"},
    {name:"Ram"},
    {name:"jetha"},
    {name:"Pabelo"},

  ]
const Hello = () => {
  return (
    <>
      <h1>Hello</h1>
    <UsingProps name="saheb"/>   
    <UsingProps name="Hrivinder"/>



    <p> pass value as props with in key value mener </p>
    <UsingProps {...info[0]}/>
    <UsingProps {...info[1]}/>

    <p>Pass value with help of map function</p>
    <div className='prop'>
  {
      info.map((user) =>(
          <UsingProps {...user}/>
      ))
  }
  </div>
    </>
  )
}

export default Hello
