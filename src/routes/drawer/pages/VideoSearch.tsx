import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import youtubeSearch, { VideoSearchResult } from 'yt-search';
import { YouTubePlayer } from 'react-youtube';
import SelectionSearchText from '../../../components/search/SelectionSearchText';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function VideoSearch({ debug, skip }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedVideos, setSearchedVideos] = useState<youtubeSearch.SearchResult>(
    { all: [], videos: [], live: [], lists: [], accounts: [], channels: [], playlists: []});
  const [selectedVideo, setSelectedVideo] = useState<VideoSearchResult | undefined>(undefined);

  const youtubeOptions = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };

  const submit = () => {
    youtubeSearch(searchTerm)
      .then((videos) => setSearchedVideos(videos));
  }

  const selectionChanged = (selection: VideoSearchResult) => {
    // TODO: Implement selection
    setSelectedVideo(selection);
  }

  if (debug) {
    console.log('Security: ', { debug, skip, searchTerm, searchedVideos });
  }

  return <Box>
    <SelectionSearchText debug={debug} defaultText='Search Videos' searchTermChanged={setSearchTerm} onSubmit={submit} options={[]} />
    <Grid container item>
      <Grid>Videos</Grid>
      {selectedVideo && <YouTubePlayer opts={youtubeOptions}/>}
    </Grid>
  </Box>;
}
export default VideoSearch;
