import React from 'react';
import {Card as CardType} from "../models";
import {DisplayedComponents} from "../../utils/common.tsx";
import NewsCard from "./NewsCard.tsx";
import CryptoCard from "./CryptoCard.tsx";

interface Props {
  card: CardType;
  cardType: DisplayedComponents;
}

function Card({ card, cardType }: Props): JSX.Element {
  switch (cardType) {
    case DisplayedComponents.news:
      return <NewsCard card={card} />
    case DisplayedComponents.crypto:
      return <CryptoCard card={card} />
  }
}
export default Card;
