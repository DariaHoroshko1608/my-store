import React from 'react';
import CheckoutForm from './CheckoutForm';
import './CheckoutPage.scss';  // Стилі для цієї сторінки

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <CheckoutForm />
        </div>
    );
};

export default CheckoutPage;
