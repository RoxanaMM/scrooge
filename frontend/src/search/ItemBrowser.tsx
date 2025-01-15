import React, {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import SearchBar from './SearchBar';
import {Product} from "../product/ProductCard";
import apiClient from "../api";
import ProductGrid from "../product/ProductGrid";
import ShoppingList from "../list/ShoppingList";

const ItemBrowser: React.FC = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        apiClient
            .get('/hello')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data
        ? data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];

    return (
        <Box sx={{padding: '20px'}}>
            <Typography variant="h3" gutterBottom align="center">
                The Nickel Squeezer App
            </Typography>
            <ShoppingList />
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
            <ProductGrid products={filteredData}/>
        </Box>
    );
};

export default ItemBrowser;
