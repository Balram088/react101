import React from "react";
import styled from "styled-components";
import { Link ,Navigate } from 'react-router-dom';



const Wrapper = styled.div`
background-color:blue;
display: flex;
gap:50px;
font-weight:500;
font-size:20px;
margin:10px;
padding:20px;
color:blue;
background-color:pink;
justify-content:center;

a{
  text-decoration: none;
}
`

export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
   
      
        {/* keep all the NavLinks here */}
     <Wrapper>
  
     
     <div>   <Link to="/home">Home</Link>  </div>
     <div>  <Link to="/about">About</Link>  </div>
     <div>   <Link to="/products">Products</Link>  </div>
     
{/*        
     <div>   <a href="/home"/>Home<a/>  </div>
     <div>  <a href="/about"/>About<a/>  </div>
     <div>   <a href="/books"/>Books<a/>  </div>
     <div>  <a href="/login"/>Login<a/>   </div>  */}
    
      </Wrapper>
    
    </>
  );
};
