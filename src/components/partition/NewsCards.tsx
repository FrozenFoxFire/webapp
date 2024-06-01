import React from 'react';
import { Grid } from '@mui/material';
import { Card } from '../models';
import NewsCard from '../Cards/NewsCard';

interface Props {
  cards: Card[];
}

function NewsCards({ cards }: Props): JSX.Element {
  return (
    <Grid id='news-cards-container' className='newscards-container' container item xs={12} direction="row" >
      {cards.map((card: Card) => (
        <NewsCard key={card.id} card={card} />
      ))}
    </Grid>
  );
}
export default NewsCards;
