import React, {PropsWithChildren, useState} from 'react';
import { Grid } from '@mui/material';
import Header from './pages/Header';
import News from './pages/News';
import Crypto from './pages/Crypto';
import Security from './pages/Security';
import Footer from './pages/Footer';
import Stocks from './pages/Stocks';
import AboutTheAuthor from './pages/AboutTheAuthor/AboutTheAuthor';
import VideoSearch from "./pages/VideoSearch.tsx";
import { DisplayedComponents } from '../../constants';

interface Props extends PropsWithChildren {
  debug?: boolean;
}

function AppDrawer({ children, debug = false }: Props) {
  const [selectedTab, setSelectedTab] = useState<DisplayedComponents>(DisplayedComponents.aboutTheAuthor);
  if (debug) {
    console.log('AppDrawer: ', {
      selectedTab,
      aboutTheOther: selectedTab === DisplayedComponents.aboutTheAuthor,
      isNews: selectedTab === DisplayedComponents.news,
      isCrypto: selectedTab === DisplayedComponents.crypto,
      isStocks: selectedTab === DisplayedComponents.stocks,
      isSecurity: selectedTab === DisplayedComponents.security,
      isVideos: selectedTab === DisplayedComponents.videos
    });
  }

  return (
    <Grid id="app-backdrop" direction="row" height='100%' >
      <Header title={process?.env?.REACT_APP_TITLE || 'Navigation'} selectionChanged={setSelectedTab} />
      {selectedTab === DisplayedComponents.aboutTheAuthor && <AboutTheAuthor debug={debug} skip={true}/>}
      {selectedTab === DisplayedComponents.news && <News debug={debug} skip={false}/>}
      {selectedTab === DisplayedComponents.crypto && <Crypto debug={debug} skip={false}/>}
      {selectedTab === DisplayedComponents.stocks && <Stocks debug={debug} skip={true}/>}
      {selectedTab === DisplayedComponents.security && <Security debug={debug} skip={true} />}
      {selectedTab === DisplayedComponents.videos && <VideoSearch debug={debug} skip={true} />}
      {children && (
        <Grid height='80vh' id="app-content" alignContent="center">
          {children}
        </Grid>
      )}
      <Footer />
    </Grid>)
}
export default AppDrawer;
