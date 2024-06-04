import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Products } from '../Pages/Products/Products'
import { ProductDetail } from '../Pages/ProductDetail/ProductDetail'
import { Cart } from '../Pages/Cart/Cart'
import { Navbar } from '../Components/Navbar/Navbar'

export const Ecommerce_Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productdetail/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}
