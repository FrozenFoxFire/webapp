import React from 'react';
import { Card as CardType } from '../models';
import NewsCard from './NewsCard.tsx';
import CryptoCard from './CryptoCard.tsx';
import { DisplayedComponents } from '../../constants.tsx';

interface Props {
  card: CardType;
  cardType: DisplayedComponents;
}

function Card({ card, cardType }: Props) {
  switch (cardType) {
    case DisplayedComponents.news:
      return <NewsCard card={card} />
    case DisplayedComponents.crypto:
      return <CryptoCard card={card} />
  }
}
export default Card;
