import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export default function Hero() {
  return (
    <Box sx={{width: '100%', py: 8, px: '31%', textAlign: 'center'}}>
        <Typography variant="h2" mb={2}> Album layout </Typography>
        <Typography sx={{fontSize: 25, mb: 3}}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Typography>
        <Box>
            <Button variant="contained" sx={{mr: 2}}>main call to action</Button>
            <Button variant="outlined">secondary action</Button>
        </Box>
    </Box>
  )
}
