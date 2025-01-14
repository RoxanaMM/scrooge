import React, { useEffect, useState } from 'react';
import apiClient from './api';
import { TextField, Card, CardContent, Typography, Grid, Box } from '@mui/material';

interface Product {
    id: string;
    name: string;
    price: string;
    url: string;
}

const MyComponent: React.FC = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        // Fetch data from Dropwizard API
        apiClient.get('/hello')  // Replace with the actual endpoint
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data ? data.filter((item: Product) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h3" gutterBottom align="center">
                The Nickel Squeezer App
            </Typography>

            <TextField
                label="Search Products"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
                sx={{ marginBottom: '20px' }}
            />

            {filteredData.length > 0 ? (
                <Grid container spacing={2}>
                    {filteredData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    style={{
                                        width: '100%',
                                        maxWidth: '200px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                    }}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        {item.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h6" color="textSecondary" align="center">
                    No matching data found.
                </Typography>
            )}
        </Box>
    );
};

export default MyComponent;
