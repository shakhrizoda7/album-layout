import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export default function Cards() {
  return (
    <Box sx={{ py: 4, px: '20%'}}>
        <Grid container spacing={5} justifyContent={'center'}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia sx={{width: '100%', height: '150px', backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                        </CardMedia>

                        <CardContent>
                            <Typography variant='h5' component={'div'} sx={{mb: 1}}>Heading</Typography>
                            <Typography variant='body1'>This is a media card. You can use this section to describe the content.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small'>view</Button>
                            <Button size='small'>edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}
