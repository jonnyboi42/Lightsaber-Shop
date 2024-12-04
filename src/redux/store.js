// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your slice reducers

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your slice reducer here
  },
});

export default store;
