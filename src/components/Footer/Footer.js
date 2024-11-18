import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{textAlign: 'center', py: 7, bgcolor: 'gray.background', mt: 4}}>
        <Typography variant='h6'>Footer</Typography>
        <Typography variant='subtitle1' color='gray.color'>Something here to give the footer a purpose!</Typography>
        <Typography variant='body2' color='gray.color'>Copyright © Your Website 2024.</Typography>
    </Box>
  )
}
