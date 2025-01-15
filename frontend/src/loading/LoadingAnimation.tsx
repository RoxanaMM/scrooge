import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CenterBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

const Progress = styled(CircularProgress)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

const LoadingAnimation: React.FC = () => {
    return (
        <CenterBox>
            <Progress />
            <Typography>Loading...</Typography>
        </CenterBox>
    );
};

export default LoadingAnimation;
