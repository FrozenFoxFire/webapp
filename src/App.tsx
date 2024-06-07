import React, { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import AppDrawer from "./routes/drawer/AppDrawer";
import GraphQL from "./routes/backend/GraphQL.tsx";

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function App({ children, debug = false }: Props) {
  debug && console.log('App.tsx');
  return (
    <Stack id="app-container">
      <GraphQL debug={true} />
      <AppDrawer debug={true}>
        {children}
      </AppDrawer>
    </Stack>
  );
}
export default App;
