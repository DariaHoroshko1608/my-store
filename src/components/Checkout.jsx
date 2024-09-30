import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        address: '',
        delivery: 'novaPoshta',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Order submitted successfully!');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">Checkout</Typography>
            <TextField label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <TextField label="Surname" value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })} required />
            <TextField label="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <TextField label="Delivery Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
            <FormControl>
                <InputLabel>Delivery</InputLabel>
                <Select value={formData.delivery} onChange={(e) => setFormData({ ...formData, delivery: e.target.value })} variant="outlined">
                    <MenuItem value="novaPoshta">Nova Poshta</MenuItem>
                    <MenuItem value="ukrPoshta">Ukr Poshta</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" type="submit">Submit Order</Button>
        </Box>
    );
};

export default Checkout;
