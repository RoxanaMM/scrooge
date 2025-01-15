import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './Routes';

const App: React.FC = () => (
    <BrowserRouter>
        <RoutesComponent />
    </BrowserRouter>
);

export default App;
