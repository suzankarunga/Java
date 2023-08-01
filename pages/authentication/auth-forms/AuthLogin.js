import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import logo from './uculonglogo.png';

const AuthLogin = () => {
  // <div className="logo">
  //   <img src="src/pages/authentication/auth-forms/uculonglogo.png" alt="Logo" />
  // </div>;
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform login logic here
    console.log(formData);
    // Clear the form fields
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            ALPHA INCIDENT MANAGEMENT
          </Typography>
          <Box component="img" src={logo} alt="logo" style={{ width: '100%' }} />

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuthLogin;
