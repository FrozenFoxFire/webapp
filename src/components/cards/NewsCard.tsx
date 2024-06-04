import React from 'react';
import { Card } from '../models';
import {Box, Grid, Stack, Typography} from '@mui/material';

interface Props {
  card: Card;
}

function NewsCard({ card }: Props): JSX.Element {
  return (
    <Grid
      container
      item
      xs={2}
      className='newscard-item'
    >
      <Stack overflow='auto' width='100%'>
        <Box width='100%' height='5rem'>
          <Typography className='newscard-title'>{card.news?.title ?? 'Title Missing'}</Typography>
        </Box>
        <Box width='100%' height='5rem'>
          <Typography className='newscard-author'>Author: {card.news?.author ?? 'Author Unknown'}</Typography>
        </Box>
        <Box width='100%' height='10rem'>
          <Typography className='newscard-description'>{card.news?.description ?? 'No Description'}</Typography>
        </Box>
      </Stack>
    </Grid>
  );
}
export default NewsCard;