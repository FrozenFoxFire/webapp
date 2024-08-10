import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';

interface Props {
  text?: string;
}

function Footer({ text }: Props) {
return (
    <Box id='app-footer' textAlign='center' alignContent='center' minHeight='5rem'>
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
    </Box>
  );
}
export default Footer;
