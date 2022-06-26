import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Stack from '@mui/material/Stack';
import './Banner.css';

function Banner() {
  return (
      <div >
          <Container  maxWidth='md' >
    <Grid container className='main'>
       
      <Stack className='suggestions' justifyContent='center' direction="row" spacing={2}  sx={{ display: { md: 'none', sm: 'none', xs: 'none', lg:'block' } }}>
          
          <Typography variant='p' className='categories' >ALL CATEGORIES</Typography>
          
          <Typography className='columns' variant='p'>Cars</Typography>
          <Typography className='columns' variant='p'>Motorcycles</Typography>
          <Typography className='columns' variant='p'>Mobile Phones</Typography>
          <Typography className='columns' variant='p'>Laptop</Typography>
          <Typography className='columns' variant='p'>Accessories</Typography>
          <Typography className='columns' variant='p'>Scooters</Typography>
          <Typography className='columns' variant='p'>Commercial</Typography>
          <Typography className='columns' variant='p'>Other Vehicles</Typography>
          
      </Stack>
      
    </Grid>
    </Container>
    <Grid  >
          <img style={{paddingBottom:'30px'}} className="responsive" src="https://mydukaan.io/blog/wp-content/uploads/Frame-1.png"/>
      </Grid>
    </div>
  );
}

export default Banner;
