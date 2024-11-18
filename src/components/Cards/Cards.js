import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, styled, Typography } from '@mui/material';

const CustomCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.gray.background,
    borderRadius: '15px',
}))

export default function Cards() {
  return (
    <Box sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 1, sm: 2, md: '20%' }}} mt={5}>
        <Grid container spacing={4} justifyContent={'center'}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                    <CustomCard >
                        <CardMedia sx={{width: '100%', height: '150px', backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                        </CardMedia>

                        <CardContent>
                            <Typography variant='h5' component={'div'} sx={{mb: 1}}>Heading</Typography>
                            <Typography variant='body1'>This is a media card. You can use this section to describe the content.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small' sx={{fontWeight: 600, borderRadius: '10px'}}>view</Button>
                            <Button size='small' sx={{fontWeight: 600, borderRadius: '10px'}}>edit</Button>
                        </CardActions>
                    </CustomCard>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}
