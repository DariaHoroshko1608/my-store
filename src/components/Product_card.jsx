import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product_card = ({ dataObj }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(dataObj));
    };

    return (
        <div>
            <button onClick={handleAddToCart}>Додати до кошика</button>
        </div>
    );
};
