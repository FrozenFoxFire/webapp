import React from 'react';
import { Grid, Typography } from '@mui/material';

interface Props {
  text?: string;
  value?: string | number;
}

function CardTextSmall({ text, value }: Props) {
  console.log({text, value});
  return <Grid display='flex' flexDirection='row' justifyContent='start' mr='0.6rem' >
    {text && <Typography fontSize='0.2rem' fontWeight='bold' className='newscard-description' >{`${text}`}</Typography>}
    {text && value && <Typography fontSize='0.2rem' className='newscard-description' >&nbsp;</Typography>}
    {value && <Typography justifySelf='end' textAlign='center' fontSize='0.1rem' fontWeight='200' className='newscard-description'>{`${value}`}</Typography>}
  </Grid>;
}
export default CardTextSmall;
