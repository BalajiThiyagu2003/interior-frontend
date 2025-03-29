import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, IconButton } from "@mui/material";
import { Google, Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In & Sign Up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError(""); 
    setMessage(""); 
  };

  // Function to handle login
  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Invalid email or password");

      const data = await response.json();
      localStorage.setItem("authToken", data.token); // Store JWT token
      navigate("/home"); // Redirect to home page after login
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle sign up
  const handleSignUp = async () => {
    setError("");
    setMessage("");
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) throw new Error("Registration failed. Try again.");

      setMessage("Account created successfully! Please sign in.");
      setIsSignUp(false); // Switch to login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" className="auth-container">
      <Box className="auth-box">
        <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? "Create Account" : "Sign In"}
        </Typography>

        {error && <Typography color="error" align="center">{error}</Typography>}
        {message && <Typography color="primary" align="center">{message}</Typography>}

        <Grid container justifyContent="center" spacing={1}>
          <Grid item><IconButton color="primary"><Google /></IconButton></Grid>
          <Grid item><IconButton color="primary"><Facebook /></IconButton></Grid>
          <Grid item><IconButton color="primary"><GitHub /></IconButton></Grid>
          <Grid item><IconButton color="primary"><LinkedIn /></IconButton></Grid>
        </Grid>

        <Typography variant="body2" align="center" gutterBottom>
          or use your email to {isSignUp ? "register" : "login"}
        </Typography>

        <form>
          {isSignUp && (
            <TextField fullWidth label="Name" margin="normal" required onChange={(e) => setName(e.target.value)} />
          )}
          <TextField fullWidth label="Email" type="email" margin="normal" required onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" required onChange={(e) => setPassword(e.target.value)} />
          {!isSignUp && <Typography variant="body2" align="right"><a href="#">Forgot Your Password?</a></Typography>}
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }} 
            onClick={isSignUp ? handleSignUp : handleLogin}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button color="secondary" onClick={toggleAuthMode}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default AuthPage;
