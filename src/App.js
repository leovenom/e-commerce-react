import './App.css';
import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

// import Products from  './components/Products/Products';
// import Navbar from  './components/Navbar/Navbar';
import { Products, Navbar } from './components';


//rafce
import React from 'react'

const App = () => {
  const [products, SetProducts] = useState([]);

  const fetchProducts = async () => {
    const { data }  = await commerce.products.list();
    SetProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  )
}

export default App


