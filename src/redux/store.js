// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your slice reducers
import nowViewingReducer from './nowViewingSlice'



const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your slice reducer here
    nowViewing: nowViewingReducer,
  },
});



export default store;