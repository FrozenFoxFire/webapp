import React, { PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import News from './routes/app/News';
import Crypto from './routes/app/Crypto';
import Header from './routes/app/Header';

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function App({ children, debug = false }: Props) {
  debug && console.log('App.tsx');
  return (
    <Stack id="app-container">
      <Stack id="app-backdrop" direction="column" height="max-content">
        <Header title={process?.env?.REACT_APP_TITLE || 'Missing Environment'} />
        <News debug={debug} skip={false} />
        <Crypto debug={debug} skip={false} />
        {children && (
          <Stack id="app-content" alignContent="center" minHeight="25rem">
            {children}
          </Stack>
        )}
        <Box id="app-footer" textAlign="center" alignContent="start" minHeight="5rem">
          <Typography id="footer-text">Footer</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
export default App;
