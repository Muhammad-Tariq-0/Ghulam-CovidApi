import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import covidicon from './covid.png'
// import MenuIcon from '@mui/icons-material/Menu';

export default function Bar() {
  return (
   
      <AppBar position="static" style={{backgroundColor:'#4D516C'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <img src={covidicon} width={50} height={50}/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Corona Virus
          </Typography>
        </Toolbar>
      </AppBar>

  );
}
