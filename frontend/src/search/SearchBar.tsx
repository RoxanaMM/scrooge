import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <TextField
            label="Search Products"
            variant="outlined"
            value={searchTerm}
            onChange={onSearchChange}
            fullWidth
            sx={{ marginBottom: '20px' }}
        />
    );
};

export default SearchBar;
