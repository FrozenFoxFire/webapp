import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <Box id="app-header" textAlign="center" alignContent="start" minHeight="5rem">
      <Typography id="app-title">{title}</Typography>
    </Box>
  );
}
export default Header;
