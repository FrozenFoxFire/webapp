import React from 'react';
import { Box, FormControl, Grid2, InputLabel } from '@mui/material';

function Login() {
  // User Context
  return (
    <FormControl>
      <Grid2 size={{ xs: 12 }} justifyContent="center">
        <Box>
          <InputLabel id="login-username">User Name</InputLabel>
        </Box>
        <Box>
          <InputLabel id="login-password">Password</InputLabel>
        </Box>
      </Grid2>
    </FormControl>
  );
}
export default Login;
