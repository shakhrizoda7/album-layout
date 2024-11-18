import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <CameraAltIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Album layout
          </Typography>
          <IconButton color='inherit'><DarkModeIcon/></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}