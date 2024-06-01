import React from 'react';
import { Grid } from '@mui/material';
import { Card } from '../models';
import NewsCard from '../Cards/NewsCard';

interface Props {
  cards: Card[];
  debug?: boolean;
}

function NewsCards({ cards, debug = false }: Props): JSX.Element {
  if (debug) {
    console.log('NewsCards', { cards})
  }

  return (
    <Grid id="news-cards-container" className="newscards-container" container item xs={12} direction="row">
      {cards.map((card: Card, index) => (
        <NewsCard key={`${card.id}-${index}`} card={card} />
      ))}
    </Grid>
  );
}
export default NewsCards;
