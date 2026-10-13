import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Second from './components/Second'
import Card from './components/Card'
import Deals from './components/Deals'
import Footer from './components/Footer'

import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'
import LoginRegister from './pages/LoginRegister'
import Categories from './pages/Categories'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import DealsPage from './pages/Dealso'



const Home = () => {
  return (
    <>
      <Hero />
      <Second />
      <Card />
      <Deals />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App