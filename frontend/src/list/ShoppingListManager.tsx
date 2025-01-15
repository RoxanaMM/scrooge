import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ShoppingListManagerProps {
    lists: { name: string; items: string[] }[];
    setLists: React.Dispatch<React.SetStateAction<{ name: string; items: string[] }[]>>;
}

const ShoppingListManager: React.FC<ShoppingListManagerProps> = ({ lists, setLists }) => {
    const [newListName, setNewListName] = useState<string>('');

    const handleAddList = () => {
        if (newListName.trim() !== '') {
            setLists([...lists, { name: newListName, items: [] }]);
            setNewListName('');
        }
    };

    const handleDeleteList = (index: number) => {
        setLists(lists.filter((_, i) => i !== index));
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Manage Your Shopping Lists
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField
                    label="New List Name"
                    variant="outlined"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" onClick={handleAddList}>
                    Add
                </Button>
            </Box>
            <List>
                {lists.map((list, index) => (
                    <ListItem key={index} secondaryAction={
                        <IconButton edge="end" onClick={() => handleDeleteList(index)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <Typography>{list.name}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShoppingListManager;
