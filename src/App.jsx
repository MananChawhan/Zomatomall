 import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AddSeller from './AddSeller';
import Login from './Login';
import Navbar from './Navbar';
import Explore from './Explore';
import Signup from './Signup';
import Cart from './Cart';
import Counter from './Counter'
import Tweet from './Tweet';
import ApiDatafetch from './ApiDataFetch';
import ArtGallery from './ArtGallery';
import Emoji from './Emoji';
import FormValidation from './Formvalidation';
import UseEffect from './UseEffect';
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
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/tweet" element={<Tweet/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/userdata" element={<ApiDatafetch/>}/>
        <Route path="/gallery" element={<ArtGallery/>}/>
        <Route path="/emoji" element={<Emoji/>}/>
        <Route path="/form" element={<FormValidation/>}/>
        <Route path="/effect" element={<UseEffect/>}/>
        </Routes>
     </div>
   )
 }
 
 export default App