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
    Typography
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface ShoppingListProps {
    list: { name: string; items: string[] };
    setLists: React.Dispatch<React.SetStateAction<{ name: string; items: string[] }[]>>;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ list, setLists }) => {
    const [item, setItem] = useState('');

    const addItem = () => {
        if (item.trim()) {
            setLists((prev) =>
                prev.map((l) =>
                    l.name === list.name ? { ...l, items: [...l.items, item.trim()] } : l
                )
            );
            setItem('');
        }
    };

    const removeItem = (index: number) => {
        setLists((prev) =>
            prev.map((l) =>
                l.name === list.name
                    ? { ...l, items: l.items.filter((_, i) => i !== index) }
                    : l
            )
        );
    };

    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography variant="h5">{list.name}</Typography>
                    <Box display="flex" gap={2} sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Add an item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addItem()}
                        />
                        <Fab color="primary" onClick={addItem}>
                            <AddIcon />
                        </Fab>
                    </Box>
                    <List>
                        {list.items.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item} />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => removeItem(index)}>
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
