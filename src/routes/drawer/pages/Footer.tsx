import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  text: string;
}

function Footer({ text }: Props) {
return (
    <Box id="app-footer" textAlign="center" alignContent="start" minHeight="5rem">
      <Typography id="footer-text">{text}</Typography>
    </Box>
  );
}
export default Footer;
