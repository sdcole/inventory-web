import React, { useState } from 'react';
import { Typography, Container, Grid, Link, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const RootContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0', // Replace with your desired background color
});

const StyledContainer = styled(Container)({
  textAlign: 'center',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', // Optional: Add shadow for a card-like appearance
});

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Submitting login form');
    try {
      const response = await axios.post('http://192.168.0.10:50670/api/Auth/Login', {
        username,
        password
      });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store the token in localStorage
      console.log('Login successful, token stored:', token);
      setError('');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in. Please try again later.');
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              id="username"
              name="username"
              label="Username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

const Login: React.FC = () => {
  return (
    <RootContainer>
      <LoginForm />
    </RootContainer>
  );
};

export default Login;