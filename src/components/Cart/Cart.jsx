import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/slices/cartSlice';
import { Button } from '@mui/material';

const Cart = () => {
    const cart = useSelector((state) => state.cart);  // Отримання стану корзини з Redux
    const dispatch = useDispatch();

    const removeItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.items.length === 0 ? (
                <p>Cart is empty!</p>
            ) : (
                <>
                    <ul>
                        {cart.items.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.quantity} x ${item.price}  {/* Використання item.price */}
                                <Button variant="contained" onClick={() => removeItemHandler(item.id)}>
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Amount: ${cart.totalAmount}</p>
                </>
            )}
        </div>
    );
};

export default Cart;


