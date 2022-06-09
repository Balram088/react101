import React from 'react'
import { Link } from 'react-router-dom'
import  style from 'styled-components';
 

 const Wrapper=style.div`
 .Nav{
    justify-content: center;
     color:blue;
     padding:30px;
     display:flex;
     gap:100px;
     fontsize:30px;
     border:2px solid black;
    
    }
    

 `
const Navbar = () => {
  return (
    <>
      <Wrapper>
      <div class="Nav">
        <Link to="/">Counter_App</Link>
        <Link to="/todos">Todo App</Link>
        </div>
      </Wrapper>
    </>
  )
}

export default Navbar
