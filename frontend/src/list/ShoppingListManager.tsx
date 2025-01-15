import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ShoppingListModel } from '../model/Models';
import ShoppingList from './ShoppingList';

interface ShoppingListManagerProps {
    shoppingLists: ShoppingListModel[];
    setShoppingLists: React.Dispatch<React.SetStateAction<ShoppingListModel[]>>;
}

const ShoppingListManager: React.FC<ShoppingListManagerProps> = ({ shoppingLists, setShoppingLists }) => {
    const [newListName, setNewListName] = useState('');
    const [selectedList, setSelectedList] = useState<ShoppingListModel | null>(null);

    const addShoppingList = () => {
        if (newListName.trim()) {
            setShoppingLists([...shoppingLists, { name: newListName, items: [] }]);
            setNewListName(''); // Clear the input after adding the list
        }
    };

    const handleDeleteList = (name: string) => {
        setShoppingLists(shoppingLists.filter((list) => list.name !== name));
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
            {!selectedList ? (
                <>
                    <Typography variant="h4" gutterBottom>
                        Shopping List Manager
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        <TextField
                            label="New Shopping List"
                            variant="outlined"
                            value={newListName}
                            onChange={(e) => setNewListName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addShoppingList()}
                            fullWidth
                        />
                        <Button variant="contained" onClick={addShoppingList}>
                            Add List
                        </Button>
                    </Box>
                    <List>
                        {shoppingLists.map((list, index) => (
                            <ListItem
                                key={index}
                                sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                                onClick={() => setSelectedList(list)} // Set selected list on click
                                style={{ cursor: 'pointer' }}
                            >
                                <Typography variant="body1">{list.name}</Typography>
                                <IconButton edge="end" onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering list selection
                                    handleDeleteList(list.name);
                                }}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </>
            ) : (
                <ShoppingList
                    list={selectedList}
                    setLists={setShoppingLists}
                />
            )}
            {selectedList && (
                <Button sx={{ mt: 2 }} variant="outlined" onClick={() => setSelectedList(null)}>
                    Back to Lists
                </Button>
            )}
        </Box>
    );
};

export default ShoppingListManager;
