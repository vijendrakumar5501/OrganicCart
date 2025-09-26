import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'

const App = () => {
  return (
 

  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/' element={<Cart/>}/> 
      <Route path='/' element={<PlaceOrder/>}/> 
    </Routes>
  </div>
  )
}

export default App