import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ShoppingListManager from '../list/ShoppingListManager';
import ShoppingList from "../list/ShoppingList";
import CheapestProducts from "../list/CheapestProducts";
import Menu from "./Menu";
import ItemBrowser from "../search/ItemBrowser";

const RoutesComponent: React.FC = () => {
    const [lists, setLists] = useState<{ name: string; items: string[] }[]>([]);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Menu />
                <Box sx={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/create-list" element={<ShoppingListManager lists={lists} setLists={setLists} />} />
                        <Route path="/view-cheapest" element={<CheapestProducts />} />
                        <Route path="/shopping-list" element={<ShoppingList lists={lists} setLists={setLists} />} />
                        <Route path="/" element={<ItemBrowser />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};

export default RoutesComponent;
