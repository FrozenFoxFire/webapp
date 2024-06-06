import React from 'react';

interface Props {
  debug?: boolean;
}

function Video({ debug = false }: Props) {
  if (debug) {
    console.log('Image: ',  { debug })
  }

  return <div>Video</div>
}
export default Video;
