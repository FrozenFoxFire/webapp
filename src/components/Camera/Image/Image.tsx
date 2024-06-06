import React from 'react';

interface Props {
  debug?: boolean;
}

function Image({ debug }: Props) {
  if (debug) {
    console.log('Image: ',  { debug })
  }

  return <div>Image</div>
}
export default Image;
