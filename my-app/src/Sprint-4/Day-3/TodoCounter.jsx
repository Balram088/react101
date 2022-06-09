import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { CounterApp } from './pages/CounterApp';
import { TodoApp } from './pages/TodoApp';

export const TodoCounter = () => {
  return (
    <div>
         <Navbar/>
         <Routes>
             <Route path="/" element={<CounterApp/>} />
             <Route path="/todos" element={<TodoApp/>} />
         </Routes>
    </div>

  )
}
