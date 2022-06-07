import React from "react";
// import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
// import { AuthContext } from "../context/AuthContext";

const Wrapper = styled.div`
   dixplay:flex;
   flexDirection:"column";
   margin:"auto";
   maxwidth:"200px";
   gap:"10px";
`


export const Login = () => {
const [loginCreds,setLoginCreds] = useState({});


     const handleChange = (e) => {
      // const { login } = useContext(AuthContext);
      const {name , value} = e.target;
      setLoginCreds({
         ...loginCreds,
         [name]:value, 
       });
      
    
       const handleSubmit = (e) =>{
         e.preventDefault();
        //  TODO;
         Login();
     };
  // useEffect(() => {
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  // }, [token]);
    
  return (
    <>
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Enter Email"
          value="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <input
          nsme="psssword"
          placeholder="Enter Password"
          value="password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      </Wrapper>
    </>
  );
  }
}


