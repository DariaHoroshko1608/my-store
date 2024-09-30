import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                    My Shop
                </Typography>
                <SearchBar />
                <Button color="inherit" component={Link} to="/cart">Cart</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
