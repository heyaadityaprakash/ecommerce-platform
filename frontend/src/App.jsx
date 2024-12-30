import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
function App() {
  
  return (
    <div className=''>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collections' element={<Collection/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/place-oder' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/product/:product:id' element={<Product/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
