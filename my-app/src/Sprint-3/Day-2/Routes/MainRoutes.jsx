import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Components/pages/Products";
import { About } from "../Components/pages/About";
import { Home } from "../Components/pages/Home";
import { Navbar } from "../Components/pages/Navbar";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      {/* keep all the routes here  */}
       <Routes>
     
     
     <Route path="/home" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="products" element={<Products/>}/>
 
     </Routes>
       
       {/* /books/* route need to be protected */}
          
  </>
  );
};
export default Mainroutes;
