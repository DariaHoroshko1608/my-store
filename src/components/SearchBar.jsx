import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                label="Search products"
                variant="outlined"
                value={searchTerm}
                onChange={handleInputChange}
                size="small"
            />
            <IconButton onClick={handleSearch} color="primary">
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default SearchBar;
