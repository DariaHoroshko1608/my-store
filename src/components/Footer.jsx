// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                &copy; 2024 My Shop
            </Typography>
        </Box>
    );
};

export default Footer;
