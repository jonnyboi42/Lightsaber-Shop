// In Redux, a slice is a concept introduced by Redux Toolkit to simplify state management. 
// It represents a specific part or "slice" of the application's 
// overall state, along with the logic to handle that part of the state.

// Key Components of a Slice
// A slice combines three main things:

// State: The specific portion of the Redux state that the slice manages.
// Actions: Functions that describe state changes (e.g., addToCart).
// Reducers: Functions that update the state based on actions.
// The slice helps encapsulate state and logic for a specific feature of your
//  application (e.g., cart, user, products).


import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addToCart: (state, action) =>{
            const item = action.payload;
            const existingItem = state.find((cartItem) => cartItem.id === item.id);
            if(existingItem){
                //Update the quantity if the item is already in the cart
                existingItem.quantity += item.quantity;
            } else{
                //Add new item to the cart
                state.push(item);
            }
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;