// src/redux/nowViewingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const nowViewingSlice = createSlice({
    name: 'nowViewing',
    initialState: null, //Start with no item being viewed,
    reducers:{
        setNowViewing: (state, action) => {
            return action.payload;
        },

        clearNowViewing: ()=>{
            return null;
        
        },




    }
})


export const { setNowViewing, clearNowViewing} = nowViewingSlice.actions;
export default nowViewingSlice.reducer;