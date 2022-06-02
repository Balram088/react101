import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
// import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
    
      
       {/* keep all the routes here  */}
       <Routes>
     
     
     <Route path="/" element={<Home/>}/>
     <Route path="posts" element={<Posts/>}/>
     <Route path="login" element={<Login/>}/>
 
     </Routes>
       
       {/* /books/* route need to be protected */}
          
  </>
  );
};
export default Mainroutes;
