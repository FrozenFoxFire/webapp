import React from 'react';
import { Grid2, Link, Typography } from '@mui/material';

interface Props {
  text?: string;
}

function Footer({ text }: Props) {
  return (
    <Grid2 container size={{ xs: 12 }} id="app-footer" border="solid 0.125rem cyan">
      {text && <Typography id="footer-text">{text}</Typography>}
      <Grid2 container display="flex" flexDirection="row" justifyContent="start">
        <Typography>Thank you for taking a look at&nbsp;</Typography>
        <Link href="https://www.linkedin.com/in/michael-peschke/">my</Link>
        <Typography>&nbsp;sample project.</Typography>
      </Grid2>
      <Grid2 container display="flex" flexDirection="row" justifyContent="start">
        <Typography>You can find more of what I work on at my&nbsp;</Typography>
        <Link href="https://github.com/FrozenFoxFire">GitHub</Link>
        <Typography>.</Typography>
      </Grid2>
      <Grid2 container size={{ xs: 12 }} justifyContent="center">
        <Typography>Contact Information</Typography>
        <Grid2 container size={{ xs: 12 }} justifyContent="center">
          <Typography>Email: michael.d.peschke@gmail.com</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
export default Footer;
