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
      textAlign="center"
      alignContent="center"
      sx={{ borderStyle: 'solid', borderWidth: '0.05rem', borderColor: 'azure' }}
    >
      <Grid container item spacing={2}>
        <Grid item xs={12} sx={{ flexGrow: 1 }}>
          <Typography>{card.name}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ flexGrow: 1 }}>
          <Typography>{card.description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default NewsCard;
