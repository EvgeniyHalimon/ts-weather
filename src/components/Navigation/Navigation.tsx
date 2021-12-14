import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StormTwoToneIcon from '@mui/icons-material/StormTwoTone';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.css'

const dateBuilder = (d: Date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

export const Navigation : React.FC<{}>  = () => {
    return (
        <Box className='nav-container' sx={{ flexGrow: 1 }}>
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
                            Weather report {dateBuilder(new Date())}
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}