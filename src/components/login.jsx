import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, IconButton } from "@mui/material";
import { Google, Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const SignIn = ({ toggleAuthMode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("authToken", "sample_token");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" className="auth-container">
      <Box className="auth-box">
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item><IconButton color="primary"><Google /></IconButton></Grid>
          <Grid item><IconButton color="primary"><Facebook /></IconButton></Grid>
          <Grid item><IconButton color="primary"><GitHub /></IconButton></Grid>
          <Grid item><IconButton color="primary"><LinkedIn /></IconButton></Grid>
        </Grid>
        <Typography variant="body2" align="center" gutterBottom>
          or use your email for login
        </Typography>
        <form>
          <TextField fullWidth label="Email" type="email" margin="normal" required onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" required onChange={(e) => setPassword(e.target.value)} />
          <Typography variant="body2" align="right"><a href="#">Forgot Your Password?</a></Typography>
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>Sign In</Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Button color="secondary" onClick={toggleAuthMode}>Sign Up</Button>
        </Typography>
      </Box>
    </Container>
  );
};

const SignUp = ({ toggleAuthMode }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = () => {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Account created successfully! Please sign in.");
    toggleAuthMode();
  };

  return (
    <Container maxWidth="sm" className="auth-container">
      <Box className="auth-box">
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item><IconButton color="primary"><Google /></IconButton></Grid>
          <Grid item><IconButton color="primary"><Facebook /></IconButton></Grid>
          <Grid item><IconButton color="primary"><GitHub /></IconButton></Grid>
          <Grid item><IconButton color="primary"><LinkedIn /></IconButton></Grid>
        </Grid>
        <Typography variant="body2" align="center" gutterBottom>
          or use your email for registration
        </Typography>
        <form>
          <TextField fullWidth label="Name" margin="normal" required onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth label="Email" type="email" margin="normal" required onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" required onChange={(e) => setPassword(e.target.value)} />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSignUp}>Sign Up</Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <Button color="secondary" onClick={toggleAuthMode}>Sign In</Button>
        </Typography>
      </Box>
    </Container>
  );
};

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleAuthMode = () => setIsSignUp(!isSignUp);
  return isSignUp ? <SignUp toggleAuthMode={toggleAuthMode} /> : <SignIn toggleAuthMode={toggleAuthMode} />;
};

export default AuthPage;