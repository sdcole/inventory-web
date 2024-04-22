import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Go to Home Page
          </Button>
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound;