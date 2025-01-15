import React from 'react';
import {Grid, Grid2, Typography} from '@mui/material';
import ProductCard, {Product} from './ProductCard';

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({products}) => {
    return products.length > 0 ? (
        <Grid2 container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductCard {...product} />
                </Grid>
            ))}
        </Grid2>
    ) : (
        <Typography variant="h6" color="textSecondary" align="center">
            No matching data found.
        </Typography>
    );
};

export default ProductGrid;
