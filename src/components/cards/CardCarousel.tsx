import React, { useState } from 'react';
import { Grid2, Stack } from '@mui/material';
import Card from '../models/Card.tsx';
import Cards from '../partition/Cards.tsx';
import SelectionSearchText from '../search/SelectionSearchText.tsx';
import { DisplayedComponents } from '../../constants.tsx';
import PageSelector from '../search/PageSelector.tsx';

interface Props {
  cards: Card[];
  cardType: DisplayedComponents;
  debug?: boolean;
}

function CardCarousel({ cards, cardType, debug = false }: Props) {
  const [paginationSize] = useState<number>(12);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const maxPageNumber = Math.ceil(cards.length / paginationSize);
  const selectedCards = cards.slice(paginationNumber * paginationSize, (paginationNumber + 1) * paginationSize);

  const API_URL = process?.env?.NEWS_API_URL;
  if (debug) {
    console.log('Card Carousel', { API_URL, paginationSize, paginationNumber, maxPageNumber, selectedCards });
  }

  // TODO: Add Sorting/Filtering
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

  // TODO: Add Better Padding
  // TODO: Update Card layouts
  return (
    <Stack id="card-carousel-content" padding="1rem">
      <Grid2 id="card-carousel-content-container" container direction="column">
        <Grid2 id="card-carousel-filters-container" className="filter-bar" container spacing={2} direction="column">
          <SelectionSearchText debug={debug} defaultText="Search your Tags" options={[]} />
        </Grid2>
        <Grid2 id="card-carousel-controller" container direction="row" spacing={2} padding="1.5rem">
          <Grid2 className="Grid2-item-no-padding">
            <Cards cards={selectedCards} cardType={cardType} debug={debug} />
          </Grid2>
          <Grid2 width="100%">
            <PageSelector
              pageCount={maxPageNumber}
              selectedPage={paginationNumber}
              updatePage={(increment) => updatePage(paginationNumber + increment)}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
export default CardCarousel;
