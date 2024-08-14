import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function JobSearch({ debug, skip }: Props) {
  if (debug) {
    console.log('JobSearch', { skip });
  }

  const [jobs, setJobs] = useState([]);

  if (debug) {
    console.log('JobSearch:states', { jobs, setJobs: !!setJobs });
  }

  return <Box width='100%' height='100%'>
    <Stack>
      <Box textAlign='center' alignContent='center'>
        <Typography>Jobs Marked as Applied</Typography>
        <Box id='jobs-search-applied'></Box>
        <Typography>Search Jobs</Typography>
        <Box id='jobs-search-search'></Box>
        <Typography>Saved Jobs</Typography>
        <Box id='jobs-search-saved'></Box>
      </Box>
    </Stack>
  </Box>;
}
export default JobSearch;
