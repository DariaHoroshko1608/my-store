import React from 'react';
import ProductDetails from '../components/Product/ ProductDetails';
import './ProductPage.scss'; // Стилі для цієї сторінки

const ProductPage = () => {
    return (
        <div className="product-page">
            <ProductDetails />
        </div>
    );
};

export default ProductPage;
