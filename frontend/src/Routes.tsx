import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Menu from './menu/Menu';
import ShoppingListManager from "./list/ShoppingListManager";
import CheapestProducts from "./list/CheapestProducts";
import ShoppingList from "./list/ShoppingList";

const RoutesComponent: React.FC = () => {
    const [selectedView, setSelectedView] = useState<string>('home'); // state for managing the view
    const [lists, setLists] = useState<{ name: string; items: string[] }[]>([]); // state for shopping lists

    const handleMenuSelection = (view: string) => setSelectedView(view); // handler for menu view change

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Menu />
                <Box sx={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/create-list" element={<ShoppingListManager lists={lists} setLists={setLists} />} />
                        <Route path="/view-cheapest" element={<CheapestProducts />} />
                        <Route path="/shopping-list" element={<ShoppingList lists={lists} setLists={setLists} />} />
                        <Route path="/" element={<div>Welcome to App!</div>} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};

export default RoutesComponent;
