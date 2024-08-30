import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

interface Props {
  text?: string;
}

function Footer({ text }: Props) {
return (
    <Grid container xs={12} id='app-footer' border='solid 0.125rem cyan'>
      {text && <Typography id='footer-text'>{text}</Typography>}
      <Grid container item display='flex' flexDirection='row' justifyContent='start'>
        <Typography>Thank you for taking a look at&nbsp;</Typography>
          <Link href='https://www.linkedin.com/in/michael-peschke/'>my</Link>
        <Typography>&nbsp;sample project.</Typography>
      </Grid>
      <Grid container item display='flex' flexDirection='row' justifyContent='start'>
        <Typography>You can find more of what I work on at my&nbsp;</Typography>
          <Link href='https://github.com/FrozenFoxFire'>GitHub</Link>
        <Typography>.</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent='center'>
        <Typography>Contact Information</Typography>
        <Grid container item xs={12} justifyContent='center'>
          <Typography>Email: michael.d.peschke@gmail.com</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Footer;
