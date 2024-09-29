import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </Router>
    );
}

export default App;

