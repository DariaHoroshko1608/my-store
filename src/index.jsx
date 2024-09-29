import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './store/api/productsApi';
import { novaPoshtaApi } from './store/api/novaposhtaApi';  // Додано API Нової Пошти
import cartReducer from './store/slices/cartSlice';
import App from './App';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [novaPoshtaApi.reducerPath]: novaPoshtaApi.reducer,  // Додано редюсер для Нової Пошти
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, novaPoshtaApi.middleware),
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

