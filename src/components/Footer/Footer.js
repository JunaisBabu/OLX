import { AppBar, Container, Grid, Icon, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './Footer.css'

function Footer() {
    return (
        <div>
            <Container maxWidth='md'>
            <Grid container  sx={{ flexGrow: 1 }} className='footer' spacing={6}>
                <Grid item>
                    <Typography  className='title' >TRENDING LOCATIONS</Typography>
                    <Typography className='list-items' >Bhubaneshwar</Typography>
                    <Typography className='list-items' >Hyderabadh</Typography>
                    <Typography className='list-items' >Chandigarh</Typography>
                    <Typography className='list-items' >Nashik</Typography>
                </Grid>
                <Grid item>
                   <Typography  className='title' >ABOUT US</Typography>
                   <Typography className='list-items' >About OLX Group</Typography>
                   <Typography className='list-items' >Contact Us</Typography>
                   <Typography className='list-items' >OLX People</Typography>
                   <Typography className='list-items' >Waah Jobs</Typography>
                </Grid>
                <Grid item>
                    <Typography  className='title' >OLX</Typography>
                    <Typography className='list-items' >Help</Typography>
                    <Typography className='list-items' >Sitemap</Typography>
                    <Typography className='list-items' >Legal & Privacy information</Typography>
                </Grid>
                <Grid item className='logos' >
                    <Typography className='title' >FOLLOW US</Typography>
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <PlayCircleOutlineIcon />
                   
                    <Grid item className='playstore' >
                       
                    <img className='play-store' src='https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0' />
                    <img className='app-store' src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' />
                     </Grid>
                    </Grid>
                   
                   
            </Grid>
          
           </Container>
           <Grid container justifyContent='space-around' className='bottom-container' >
               <Grid item>
               <span className='other'>Other Countries  </span>
               <span>Pakistan - South Africa - Indonesia</span>
               </Grid>
               <Grid item>
                   <span>Free Classifieds in India </span>
                   <span>. © 2006-2021 OLX</span>
                   </Grid>
           </Grid>
        </div>
    )
}

export default Footer
