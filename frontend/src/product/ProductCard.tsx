import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {Product} from "../model/Models";

const ProductCard: React.FC<Product> = ({ name, price, url }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={url} alt={name} style={{width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '8px',}}/>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
