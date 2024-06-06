import React from 'react';
import { Grid } from '@mui/material';
import { Card as CardType } from '../models';
import Card from '../cards/Card';

import {DisplayedComponents} from "../../constants.tsx";

interface Props {
  cards: CardType[];
  cardType: DisplayedComponents;
  debug?: boolean;
}

function Cards({ cards, cardType, debug = false }: Props): JSX.Element {
  if (debug) {
    console.log('Cards', { cards, cardType })
  }

  return (
    <Grid id="news-cards-container" className="newscards-container" container item xs={12} direction="row">
      {cards.map((card, index) => (
        <Card key={`${card.id}-${index}`} card={card} cardType={cardType} />
      ))}
    </Grid>
  );
}
export default Cards;
