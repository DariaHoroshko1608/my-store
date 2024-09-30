import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, TextField } from '@mui/material';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <Box>
            <Typography variant="h4">Your Cart</Typography>
            {cartItems.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography>{item.title}</Typography>
                    <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        size="small"
                        sx={{ width: '60px' }}
                    />
                    <Button variant="contained" color="error" onClick={() => handleRemove(item.id)}>
                        Remove
                    </Button>
                </Box>
            ))}
            <Typography variant="h6" sx={{ mt: 3 }}>
                Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} $
            </Typography>
        </Box>
    );
};

export default Cart;
