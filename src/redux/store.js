
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage for web (localStorage)

import cartReducer from './cartSlice'; // Import your slice reducers
import nowViewingReducer from './nowViewingSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root',          // Key for the persisted data in localStorage
  version: 1,           // Version of the persisted store
  storage,              // Storage engine (Typically localStorage but can switch to sessionStorage or a custom engine)
};

// Combine reducers (to support multiple slices)
const rootReducer = combineReducers({
  cart: cartReducer,          // Cart slice reducer
  nowViewing: nowViewingReducer, // NowViewing slice reducer
});

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,  // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore warnings for non-serializable values
    }),
});

// Export the persistor and store
export const persistor = persistStore(store);
export default store;
