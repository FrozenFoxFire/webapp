import React, { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import youtubeSearch, { SearchResult, VideoSearchResult } from 'yt-search';
import YouTubePlayer from '../../../components/video/YouTube';
import SelectionSearchText from '../../../components/search/SelectionSearchText';
import YouTubeCards from '../../../components/cards/YouTubeCards.tsx';

const DEFAULT_VIDEO_SEARCH = { all: [], videos: [], live: [], lists: [], accounts: [], channels: [], playlists: [] };

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function VideoSearch({ debug, skip }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedVideos, setSearchedVideos] = useState<SearchResult>(DEFAULT_VIDEO_SEARCH);
  const [selectedVideo, setSelectedVideo] = useState<VideoSearchResult | undefined>(undefined);

  const submit = () => {
    console.log({ searchTerm });
    // youtubeSearch(searchTerm)
    //   .then((videos) => setSearchedVideos(videos));
  };

  if (debug) {
    console.log('Security: ', { debug, skip, searchTerm, searchedVideos });
  }

  return (
    <Box>
      <SelectionSearchText
        debug={debug}
        defaultText="Search Videos"
        searchTermChanged={setSearchTerm}
        onSubmit={submit}
        options={[]}
      />
      <Grid2 container>
        <Grid2>Videos</Grid2>
        {!!selectedVideo && <YouTubePlayer options={selectedVideo} />}
        <YouTubeCards debug={debug} searchResult={searchedVideos} selectedVideo={setSelectedVideo} />
      </Grid2>
    </Box>
  );
}
export default VideoSearch;
