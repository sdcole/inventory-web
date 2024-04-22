import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        This app was created for basic inventory management.
      </Typography>
      <Typography variant="body2">
        Saebastion Cole 2024
      </Typography>
    </Container>
  );
};

export default AboutPage;