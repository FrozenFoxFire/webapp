import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const DEFAULT_OPTIONS = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }
};

interface Props {
  options: YouTubeProps;
}

function YouTubeVideo({ options = {} }: Props) {
  // YouTubeProps contains some overlapping props, so use that
  // Consider permanent DEFAULT options for video
  // TODO: make this cleaner - Should be separate from VideoSearch in case we add more video players
  const validOptions = { ...options, ...{ opts: { ...(options?.opts || {}), ...DEFAULT_OPTIONS }}};

  return <YouTube { ...validOptions }/>;
}
export default YouTubeVideo;
