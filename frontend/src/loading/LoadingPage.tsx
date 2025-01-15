import React from "react";
import { Box } from "@mui/material";
import LoadingAnimation from "./LoadingAnimation";

const LoadingPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh'
            }}
        >
            <LoadingAnimation />
        </Box>
    );
};

export default LoadingPage;
