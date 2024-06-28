import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Inventory from '../Pages/Inventory';
import Navbar from './Navbar';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import NotFound from '../Pages/NotFound';
import About from '../Pages/About';
import Login from '../Pages/Login';

/*
* This is the parent component for the Page navigation.
* This contains the links to the main pages used for navigation.
* Th
*/
const Navigation = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductDetailsPage/>} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Navigation;