import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    try {
      await axios.post('/api/session', new URLSearchParams({ email, password }).toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      navigate('/');
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Login
        </Button>
      </form>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
