import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import youtubeSearch from 'yt-search';
import SelectionSearchText from '../../../components/search/SelectionSearchText';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function VideoSearch({ debug, skip }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedVideos, setSearchedVideos] = useState<youtubeSearch.SearchResult>(
    { all: [], videos: [], live: [], lists: [], accounts: [], channels: [], playlists: []});

  const submit = () => {
    youtubeSearch(searchTerm)
      .then((videos) => setSearchedVideos(videos));
  }

  if (debug) {
    console.log('Security: ', { debug, skip, searchTerm, searchedVideos });
  }

  return <Box>
    <SelectionSearchText debug={debug} defaultText='Search Videos' searchTermChanged={setSearchTerm} onSubmit={submit} options={[]} />
    <Grid container item>
      <Grid>Videos</Grid>
    </Grid>
  </Box>;
}
export default VideoSearch;
