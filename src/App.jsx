 import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AddSeller from './AddSeller';
import Login from './Login';
import Navbar from './Navbar';
import Explore from './Explore';
import Signup from './Signup';
 const App = () => {
   return (
     <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories" element={<AddSeller/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
     </div>
   )
 }
 
 export default App