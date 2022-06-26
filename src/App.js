import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import CreatePage from "./Pages/CreatePage";
import ViewPage from "./Pages/ViewPage";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";
import ErrorPage from "./Pages/ErrorPage";


function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    // console.log(user);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="main">
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
