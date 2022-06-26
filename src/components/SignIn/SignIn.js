import * as React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignIn.css";
import { FirebaseContext } from "../../store/Context";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              navigate("/login");
            });
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="main-container" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className="signin-border"
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar> */}
          <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/08/olx-logo.png" />
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <form
            component="form"
            onSubmit={handleSubmit}
            validate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              name="email"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Mobile Number"
              name="phone"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "teal" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() => {
                    navigate("/login");
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  {"Do you already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
