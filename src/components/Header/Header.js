import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeContext from '../../Theme/Theme';

export default function Header() {
  const {mode, toggleMode} = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{bgcolor: 'primary.main', color: 'header.main'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <CameraAltIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Album layout
          </Typography>
          <IconButton color='inherit' onClick={toggleMode}>{mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}</IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}