import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081',
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif",
        h4: {
            fontWeight: 700,  // Ensure you're using valid font weights (normal, bold, etc.)
            fontSize: '2.5rem',
        },
        h6: {
            fontWeight: 600, // Same here
            fontSize: '1.5rem',
        },
    },
});

export default theme;