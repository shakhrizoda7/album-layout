import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export default function Hero() {
  return (
    <Box sx={{width: '100%', py: 6, px: '31%', textAlign: 'center'}} bgcolor={'gray.background'}>
        <Typography variant="h2" mb={2}> Album layout </Typography>
        <Typography sx={{fontSize: 24, mb: 3}} color='gray.color'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Typography>
        <Box>
            <Button variant="contained" sx={{mr: 2, borderRadius: '10px'}}>main call to action</Button>
            <Button variant="outlined" sx={{borderRadius: '10px'}}>secondary action</Button>
        </Box>
    </Box>
  )
}
