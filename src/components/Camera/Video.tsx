import React from 'react';

interface Props {
  debug?: boolean;
}

function Video({ debug = false }: Props) {
  if (debug) {
    console.log('Video: ',  { debug })
  }

  return <div>Video</div>
}
export default Video;
