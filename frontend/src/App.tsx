import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RoutesComponent from "./menu/Routes";

import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from "./theme";

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <RoutesComponent/>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
