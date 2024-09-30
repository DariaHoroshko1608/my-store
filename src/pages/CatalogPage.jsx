import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useGetProductsQuery } from '../redux/productsSlice';
import SearchBar from '../components/SearchBar';
import { Container, Typography } from '@mui/material';

const CatalogPage = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredProducts(products);
        } else {
            const lowercasedFilter = searchTerm.toLowerCase();
            const filteredData = products.filter((product) =>
                product.title.toLowerCase().includes(lowercasedFilter)
            );
            setFilteredProducts(filteredData);
        }
    };

    if (isLoading) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3 }}>Catalog</Typography>
            <SearchBar onSearch={handleSearch} />
            <ProductList products={filteredProducts} />
        </Container>
    );
};

export default CatalogPage;
