import React from 'react';
import { Card } from '../models';
import { Grid, Typography } from '@mui/material';

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
      <Grid container item spacing={2}>
        <Grid item xs={12}>
          <Typography>{card.title ?? 'Title Missing'}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Author: {card.author ?? 'Author Unknown'}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{card.description ?? 'No Description'}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default NewsCard;
