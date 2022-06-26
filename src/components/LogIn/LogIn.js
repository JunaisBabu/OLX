import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './LogIn.css'
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';


const theme = createTheme();

export default function LogIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{padding:10}} maxWidth="xs">
        <CssBaseline />
        <Box className='login-border'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
               
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar> */}
          <img  src="https://cdn.freelogovectors.net/wp-content/uploads/2021/08/olx-logo.png" />
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          <form component="form" onSubmit={handleLogin} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button className='login-btn'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,background: 'teal' }}
            >
              Log In
            </Button>
            <Grid  container>
             
              <Grid item>
                <Link onClick={()=>{navigate('/signup')}} sx={{cursor:'pointer'}} variant="body2">
                  {"Don't you have an Account? SignUp"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}