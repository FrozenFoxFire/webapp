import React, { PropsWithChildren } from 'react';
import { Grid2 } from '@mui/material';
import { SearchResult, VideoSearchResult } from 'yt-search';
import VideoCard from './VideoCard.tsx';

interface Props extends PropsWithChildren {
  debug?: boolean;
  searchResult?: SearchResult;
  selectedVideo?: (results: VideoSearchResult) => void;
}

function YouTubeCards({ debug, searchResult, selectedVideo }: Props) {
  if (debug) {
    console.log('YouTubeSearch', { searchResult, selectedVideo });
  }

  return searchResult?.videos ? (
    <Grid2 container sx={{ padding: '0.5rem', margin: '0.75rem' }}>
      {searchResult.videos.map((video) => (
        <VideoCard key={video.videoId} video={video} />
      ))}
    </Grid2>
  ) : null;
}
export default YouTubeCards;
