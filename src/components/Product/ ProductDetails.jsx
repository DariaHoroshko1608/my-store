import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../store/api/productsApi';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/slices/cartSlice';
import { Button } from '@mui/material';
import './ ProductDetails.scss';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const addToCartHandler = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div className="product-details">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button variant="contained" onClick={addToCartHandler}>Add to Cart</Button>
        </div>
    );
};

export default ProductDetails;
