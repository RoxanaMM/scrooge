import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { Drawer } from '@mui/material';

const menuItems = [
    {label: 'Home', path: '/'},
    {label: 'Create/Manage Lists', path: '/create-list'},
    {label: 'View Shopping List', path: '/shopping-list'},
    {label: 'Cheapest products', path: '/view-cheapest'},
];

const Menu: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Drawer variant="permanent"
                sx={{width: 240, flexShrink: 0, '& .MuiDrawer-paper': {width: 240, boxSizing: 'border-box'}}}>
            <List>
                {menuItems.map(({label, path}) => (
                    <ListItem key={path} disablePadding>
                        <ListItemButton onClick={() => navigate(path)}>
                            <ListItemText primary={label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Menu;
