import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import Card from '../models/Card.tsx';
import Cards from '../partition/Cards.tsx';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import SelectionSearchText from "../search/SelectionSearchText.tsx";

import {DisplayedComponents} from "../../constants.tsx";

interface Props {
  cards: Card[];
  cardType: DisplayedComponents;
  debug?: boolean;
}

function CardCarousel({ cards, cardType, debug = false }: Props) {
  const [paginationSize] = useState<number>(12);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const maxPageNumber = Math.ceil(cards.length / paginationSize);
  const selectedCards = cards
    .slice(paginationNumber * paginationSize, (paginationNumber + 1) * paginationSize);

  const API_URL = process?.env?.NEWS_API_URL;
  if (debug) {
    console.log('Card Carousel', { API_URL, paginationSize, paginationNumber, maxPageNumber, selectedCards });
  }

  // const updatePagination = (newPaginationSize: number = 10) => {
  //   if (newPaginationSize === paginationSize) {
  //     return;
  //   }
  //
  //   // Pagination Size
  //   setPaginationSize(newPaginationSize)
  //
  //   // Pagination Number (scale approx)
  //   const newPaginationNumber = paginationSize * paginationNumber / newPaginationSize
  //   setPaginationNumber(newPaginationNumber);
  // }

  const updatePage = (newPageNumber: number = 0) => {
    if (newPageNumber < 0 || newPageNumber >= maxPageNumber) {
      return;
    }
    setPaginationNumber(newPageNumber);
  };

  return (
    <Stack id="card-carousel-content" textAlign="center" alignContent="center">
      <Grid id='card-carousel-content-container' className='grid-item-no-padding'
            container item xs={12} textAlign='center' direction='column' spacing={5}>
        <Grid id='card-carousel-filters-container' className='filter-bar' container item xs={12} spacing={2} direction='column'>
          <SelectionSearchText debug={debug} title='Search your Tags' topics={[]} />
        </Grid>
        <Grid id="card-carousel-controller" container item direction="row" spacing={2}>
          <Grid
            id="carousel-left"
            className="clickable-grid"
            container
            item
            xs={2}
            onClick={() => updatePage(paginationNumber - 1)}
          >
            <ChevronLeft sx={{ fontSize: '15rem' }} />
          </Grid>
          <Grid className='grid-item-no-padding' item xs={8} sx={{ padding: 0 }}>
            <Cards
              cards={selectedCards}
              cardType={cardType}
              debug={debug}
            />
          </Grid>
          <Grid
            id="carousel-right"
            className="clickable-grid"
            container
            item
            xs={2}
            onClick={() => updatePage(paginationNumber + 1)}
          >
            <ChevronRight sx={{ fontSize: '15rem' }} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
export default CardCarousel;
