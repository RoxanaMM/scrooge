import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ShoppingListManager from '../list/ShoppingListManager';
import CheapestProducts from '../list/CheapestProducts';
import Menu from './Menu';
import ItemBrowser from '../search/ItemBrowser';
import {ShoppingListModel} from '../model/Models';

const RoutesComponent: React.FC = () => {
    const [lists, setLists] = useState<ShoppingListModel[]>([]);

    return (
        <Box sx={{display: 'flex'}}>
            <Menu/>
            <Box sx={{flex: 1, padding: '20px'}}>
                <Routes>
                    <Route path="/view-cheapest" element={<CheapestProducts/>}/>
                    <Route path="/shopping-list" element={
                        <ShoppingListManager shoppingLists={lists} setShoppingLists={setLists}/>
                    }/>
                    <Route path="/" element={<ItemBrowser/>}/>
                </Routes>
            </Box>
        </Box>
    );
};

export default RoutesComponent;
