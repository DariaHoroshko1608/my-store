import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/productsSlice';
import { Container, Typography, Button, Box } from '@mui/material';

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id);

    if (isLoading) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{product.title}</Typography>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100%' }} />
            <Typography>{product.description}</Typography>
            <Typography>{product.price} $</Typography>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained">Add to Cart</Button>
            </Box>
        </Container>
    );
};

export default ProductPage;
