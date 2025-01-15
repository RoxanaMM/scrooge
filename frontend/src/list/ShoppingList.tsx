import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface ShoppingListProps {
    lists: { name: string; items: string[] }[];
    setLists: React.Dispatch<React.SetStateAction<{ name: string; items: string[] }[]>>;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ lists, setLists }) => {
    const [item, setItem] = useState('');
    const [selectedList, setSelectedList] = useState<number | null>(null); // Track the selected list index

    const addItem = () => {
        if (item.trim() && selectedList !== null) {
            const updatedLists = [...lists];
            updatedLists[selectedList].items.push(item.trim());
            setLists(updatedLists);
            setItem('');
        }
    };

    const removeItem = (index: number) => {
        if (selectedList !== null) {
            const updatedLists = [...lists];
            updatedLists[selectedList].items = updatedLists[selectedList].items.filter((_, i) => i !== index);
            setLists(updatedLists);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addItem();
        }
    };

    return (
        <Box sx={{ maxWidth: 500, margin: 'auto', mt: 8, p: 3 }}>
            <Card
                sx={{
                    borderRadius: '16px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}
            >
                <CardContent>
                    <Typography variant="h4" sx={{ mb: 2, textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}>
                        Shopping List
                    </Typography>
                    <Box display="flex" gap={2} sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            label="Add an item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            onKeyDown={handleKeyPress}
                            variant="outlined"
                            size="small"
                        />
                        <Fab color="primary" aria-label="add" onClick={addItem} size="medium">
                            <AddIcon />
                        </Fab>
                    </Box>
                    <List>
                        {selectedList !== null &&
                            lists[selectedList].items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        bgcolor: 'background.paper',
                                        borderRadius: '8px',
                                        mb: 1,
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            sx: { fontWeight: '500', color: 'text.primary' },
                                        }}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            onClick={() => removeItem(index)}
                                            sx={{
                                                color: 'error.main',
                                                '&:hover': { color: 'error.dark' },
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ShoppingList;
