import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Create.css";
import { useState } from "react";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useContext } from "react";
import { useNavigate } from "react-router";

const theme = createTheme();

export default function Create() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const date = new Date();

  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          let userId = user.uid;
          let createdAt = date.toDateString();
          firebase.firestore().collection("products").add({
            name,
            category,
            price,
            url,
            userId,
            createdAt,
          });
          console.log(createdAt);
          navigate("/");
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className="create-product"
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="create-box" noValidate sx={{ mt: 1 }}>
            <img src="https://sokodirectory.com/wp-content/uploads/2015/11/OLX-Kenya.png" />
            <Typography variant="h6">Sell Product</Typography>

            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="standard-basic"
              fullWidth
              label="Name"
              variant="standard"
            />

            <TextField
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="standard-basic"
              fullWidth
              label="Category"
              variant="standard"
            />
            <TextField
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="standard-basic"
              fullWidth
              label="Price"
              variant="standard"
              type="number"
            />
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ""}
            ></img>
            <TextField
              onChange={(e) => setImage(e.target.files[0])}
              id="standard-basic"
              fullWidth
              label="Image"
              variant="standard"
              type="file"
            />
            <button onClick={handleSubmit}>Submit</button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
