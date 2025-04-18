import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); 
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
      localStorage.setItem("authToken", data.token); 
      window.location.href = '/home'
    } catch (err) {
      setError(err.message);
    }
  };

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
      setIsSignUp(false); 
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
