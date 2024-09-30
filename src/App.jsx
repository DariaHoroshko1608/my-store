import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
