import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function AboutTheAuthor({ debug, skip }: Props) {
  if (debug) {
    console.log('AboutTheAuthor', { skip });
  }

  return <Box width='100%' height='100%'>
    <Stack>
      <Box textAlign='center'>
        <Typography>Michael Peschke</Typography>
        <Typography>Software Developer</Typography>
        <Typography>Hardware Developer</Typography>
        <Typography>IoT Developer</Typography>
        <Typography>micahel.d.peschke@gmail.com</Typography>
      </Box>
    </Stack>
  </Box>;
}
export default AboutTheAuthor;
