import React from "react";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


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

 const Navbar = () => {
const {isAuth , logout} = useContext(AuthContext);
const navigate = useNavigate();
const handleLoginClick = () => {
  //login scree
  if(isAuth){
    logout();
  
  }
  else{
      //he wants login 
      navigate("/login");
  }
};

return (
    <>
        <Wrapper>
         <div>   <Link to="/home">Home</Link>  </div>
         <div>   <Link to="/posts">Posts</Link>  </div>
          <button onClick={handleLoginClick}>
            {isAuth ? "Logout" : "Login"}
          </button>
      
      </Wrapper>
    
    </>
  );
};
export default Navbar;
