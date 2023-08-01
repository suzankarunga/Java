import React, { useState } from 'react';
import { TextField, Button, Container, Box, Grid, Card, CardContent } from '@mui/material';
import logo from './uculonglogo.png';
const AuthRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    // You can perform registration logic here
    console.log(formData);
    // Clear the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box component="img" src={logo} alt="logo" style={{ width: '100%' }} />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth required />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth required />
              </Grid>
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
                    Register
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

export default AuthRegister;
