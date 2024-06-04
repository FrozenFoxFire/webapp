import React, { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import AppDrawer from "./routes/drawer/AppDrawer.tsx";

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function App({ children, debug = false }: Props) {
  debug && console.log('App.tsx');
  return (
    <Stack id="app-container">
      <AppDrawer children={children} />
    </Stack>
  );
}
export default App;
