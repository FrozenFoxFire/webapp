import React from 'react';
import { Grid2 } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface PageSelectorProps {
  pageCount: number;
  selectedPage: number;
  updatePage: (amount: number) => void;
}

function PageSelector({ pageCount, selectedPage, updatePage }: PageSelectorProps) {
  const currentPage = selectedPage + 1;
  return (
    <Grid2 container direction="row" className="clickable-Grid2">
      <Grid2 id="carousel-left" container onClick={() => updatePage(-1)} justifyContent="start">
        <ChevronLeft sx={{ fontSize: '4rem' }} />
      </Grid2>
      <Grid2 alignContent="center" direction="row">
        {pageCount > 1 && <div>{1}</div>}
        {`Selected Page: ${currentPage}`}
        {/*Condition 1: Within 'X' range of page 1*/}
        {/*Condition 2: Range is in middle and far enough from condition 1 or 3 */}
        {/*Condition 3: Within 'X' range of final page*/}
        {pageCount > 1 && <div>{pageCount}</div>}
      </Grid2>
      <Grid2 id="carousel-right" container onClick={() => updatePage(1)} justifyContent="end">
        <ChevronRight sx={{ fontSize: '4rem' }} />
      </Grid2>
    </Grid2>
  );
}

export default PageSelector;
