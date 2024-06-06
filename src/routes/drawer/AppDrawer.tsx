import React, {PropsWithChildren, useState} from 'react';
import Header from "./pages/Header.tsx";
import News from "./pages/News.tsx";
import Crypto from "./pages/Crypto.tsx";
import Security from "./pages/Security.tsx";
import { Stack } from "@mui/material";
import Footer from "./pages/Footer.tsx";
import Stocks from "./pages/Stocks.tsx";
import {DisplayedComponents} from "../../constants.tsx";

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function AppDrawer({ children, debug = false }: Props) {
  const [selectedTab, setSelectedTab] = useState<DisplayedComponents>(DisplayedComponents.crypto);
  if (debug) {
    console.log('AppDrawer: ', {
      selectedTab,
      isNews: selectedTab === DisplayedComponents.news,
      isCrypto: selectedTab === DisplayedComponents.crypto,
      isStocks: selectedTab === DisplayedComponents.stocks,
      isSecurity: selectedTab === DisplayedComponents.security });
  }

  return (
    <Stack id="app-backdrop" direction="column" height="max-content" margin='2.75rem'>
      <Header title={process?.env?.REACT_APP_TITLE || 'Navigation'} selectionChanged={setSelectedTab} />
      {selectedTab === DisplayedComponents.news && <News debug={debug} skip={false}/>}
      {selectedTab === DisplayedComponents.crypto && <Crypto debug={debug} skip={false}/>}
      {selectedTab === DisplayedComponents.stocks && <Stocks debug={debug} skip={true}/>}
      {selectedTab === DisplayedComponents.security && <Security debug={debug} skip={true} />}
      {children && (
        <Stack id="app-content" alignContent="center" minHeight="25rem">
          {children}
        </Stack>
      )}
      <Footer text='Footer Placeholder Text' />
    </Stack>)
}
export default AppDrawer;
