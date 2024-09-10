import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { VideoSearchResult } from 'yt-search';

interface Props {
  debug?: boolean;
  video?: VideoSearchResult;
}

function VideoCard({ debug, video }: Props) {

  if (debug) {
    console.log('VideoCard', { video })
  }

  // TODO: Test and Update UI
  // Add hover auto-play selection
  // Add better buffering
  return <Grid container item xs={4} height='10rem'>
    {video?.title && <Typography variant='h3'>{video?.title}</Typography>}
    {video?.url && <Link href={video.url} variant='h4'>Link to video</Link>}
    {video?.description && <Typography variant='body1'>{video?.description}</Typography>}
  </Grid>
}
export default VideoCard;
