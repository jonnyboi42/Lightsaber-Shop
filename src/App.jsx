// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';
import SaberPage from './pages/SaberPage/SaberPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saber" element={<SaberPage />} />
        <Route path="/cart" element={<CartPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Ensure this line exists
