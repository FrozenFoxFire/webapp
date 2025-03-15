import React from 'react';
import { Grid2, Typography } from '@mui/material';
import CardType from '../models/Card';
import Card from '../cards/Card';

import { DisplayedComponents } from '../../constants.tsx';

interface Props {
  cards: CardType[];
  cardType: DisplayedComponents;
  debug?: boolean;
}

function Cards({ cards, cardType, debug = false }: Props): JSX.Element {
  if (debug) {
    console.log('Cards', { cards, cardType });
  }

  return (
    <Grid2
      id="news-cards-container"
      className="newscards-container"
      container
      direction="row"
      size={{ xs: 12 }}
      padding="0.5rem">
      {cards.length === 0 && <Typography>Nothing to display...</Typography>}
      {cards.map((card, index) => (
        <Card key={`${card.id}-${index}`} card={card} cardType={cardType} />
      ))}
    </Grid2>
  );
}
export default Cards;
