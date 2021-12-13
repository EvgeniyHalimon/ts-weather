import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StormTwoToneIcon from '@mui/icons-material/StormTwoTone';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.css'

export const Navigation : React.FC<{}>  = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Link to='/'>
                            <StormTwoToneIcon color='action'/>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link 
                            to='/weather-report'
                            className='nav-link'
                        >
                            Weather report
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}