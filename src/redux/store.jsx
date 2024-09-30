import { configureStore } from '@reduxjs/toolkit';
import productsApi from './productsApi';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
