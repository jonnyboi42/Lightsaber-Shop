// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';
import SaberPage from './pages/SaberPage/SaberPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saber" element={<SaberPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} /> 
        <Route path="/confirmation" element={<ConfirmationPage/>} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Ensure this line exists
