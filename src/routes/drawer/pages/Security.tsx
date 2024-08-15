import React from 'react';
import { Stack } from '@mui/material';
import Image from '../../../components/Camera/Image.tsx';
import Video from '../../../components/Camera/Video.tsx';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function Security({ debug = false, skip = false }: Props) {
  if (debug) {
    console.log('Security: ', { debug, skip })
  }

  return (<Stack>
    <Video debug={debug} />
    <Image debug={debug} />
  </Stack>);
}
export default Security;
