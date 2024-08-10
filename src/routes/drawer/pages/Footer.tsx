import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';

interface Props {
  text?: string;
}

function Footer({ text }: Props) {
return (
    <Grid id='app-footer' textAlign='center' minHeight='5rem' flexGrow={0} flexShrink={0}>
      <Stack alignItems='center'>
        {text && <Typography id='footer-text'>{text}</Typography>}
        <Grid display='flex' flexDirection='row' justifyContent='start'>
          <Typography>Thank you for taking a look at&nbsp;</Typography>
            <Link href='https://www.linkedin.com/in/michael-peschke/'>my</Link>
          <Typography>&nbsp;sample project.</Typography>
        </Grid>
        <Grid display='flex' flexDirection='row' justifyContent='start'>
          <Typography>You can find more of what I work on at my&nbsp;</Typography>
            <Link href='https://github.com/FrozenFoxFire'>GitHub</Link>
          <Typography>.</Typography>
        </Grid>
      </Stack>
    </Grid>
  );
}
export default Footer;
