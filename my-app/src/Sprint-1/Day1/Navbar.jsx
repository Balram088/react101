import React from 'react'
import Home from './Pages/Home';
import { Services } from './Pages/Services';
import About from './Pages/About';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';
import './Comonenets/NavStyled.css'

export const Navbar = () => {
  return (
   <>
   <div className='main'>
       <div className='left'>
           <h3>LOGOBERY</h3>
       </div>
       <div className='center'>
           <div><Home/></div>
           <div><Services/></div>
           <div><Product/></div>
           <div><About/></div>
        

       </div>
       <div className='right'>
       <div><Contact/></div>
       </div>
       
   </div>
   </>
 )
}
