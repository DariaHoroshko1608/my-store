import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/slices/cartSlice';
import { Button } from '@mui/material';
import './ProductItem.scss';  // Стилі для цього компонента

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <Button variant="contained" onClick={addToCartHandler}>Add to Cart</Button>
        </div>
    );
};

export default ProductItem;
