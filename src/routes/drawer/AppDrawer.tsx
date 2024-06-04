import React, {PropsWithChildren, useState} from 'react';
import Header from "./pages/Header.tsx";
import News from "./pages/News.tsx";
import Crypto from "./pages/Crypto.tsx";
import {Box, Stack, Typography} from "@mui/material";
import {DisplayedComponents} from "../../utils/common.tsx";

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function AppDrawer({ children, debug = false }: Props) {
  const [selectedTab, setSelectedTab] = useState<DisplayedComponents>(DisplayedComponents.news);
  return (
    <Stack id="app-backdrop" direction="column" height="max-content" margin='2.75rem'>
      <Header title={process?.env?.REACT_APP_TITLE || 'Navigation'} selectionChanged={setSelectedTab} />
      {selectedTab === DisplayedComponents.news && <News debug={debug} skip={false}/>}
      {selectedTab === DisplayedComponents.crypto && <Crypto debug={debug} skip={false}/>}
      {children && (
        <Stack id="app-content" alignContent="center" minHeight="25rem">
          {children}
        </Stack>
      )}
      <Box id="app-footer" textAlign="center" alignContent="start" minHeight="5rem">
        <Typography id="footer-text">Footer</Typography>
      </Box>
    </Stack>)
}
export default AppDrawer;
