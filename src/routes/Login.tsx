import React from 'react';
import { Box, FormControl, Grid, InputLabel } from '@mui/material';

function Login() {
  // User Context
  return (
    <FormControl>
      <Grid xs={12} justifyContent="center">
        <Box>
          <InputLabel id="login-username">User Name</InputLabel>
        </Box>
        <Box>
          <InputLabel id="login-password">Password</InputLabel>
        </Box>
      </Grid>
    </FormControl>
  );
}
export default Login;
