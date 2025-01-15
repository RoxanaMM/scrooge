import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Menu: React.FC = () => {
    const navigate = useNavigate();
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/')}>
                    <ListItemText primary="Home"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/create-list')}>
                    <ListItemText primary="Create/Manage Lists"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/shopping-list')}>
                    <ListItemText primary="View Shopping List"/>
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default Menu;
