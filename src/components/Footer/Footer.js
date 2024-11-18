import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{textAlign: 'center', py: 8}}>
        <Typography variant='h6'>Footer</Typography>
        <Typography variant='subtitle1'>Something here to give the footer a purpose!</Typography>
        <Typography variant='body2'>Copyright © Your Website 2024.</Typography>
    </Box>
  )
}
