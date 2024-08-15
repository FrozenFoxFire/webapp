import React from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Card from '../models/Card.tsx';
import { Box, Stack } from '@mui/material';

const TABLE_HEADER = [
  { field: 'id', headerName: 'ID', hideable: true },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'price', headerName: 'Price (USD)', width: 150 },
  // { field: 'ath', headerName: 'ATH' },
  // { field: 'athp', headerName: 'ATH %' },
  { field: 'atl', headerName: 'ATL', width: 100, hideable: true },
  { field: 'atlp', headerName: 'ATL %', width: 125, hideable: true },
  { field: 'atld', headerName: 'ATL Date', width: 160, hideable: true }
];

interface Props {
  cards?: Card[];
  debug?: boolean;
}

function CryptoTable({ cards=[], debug }: Props) {
  if (debug) {
    console.log('CryptoTable', { cards });
  }

  return <Stack margin='2.5rem' height='40rem' overflow='scroll' >
    <Box padding='1.5rem'>
      <DataGrid columns={TABLE_HEADER}
                rows={cards.map((card: Card) =>
                  ({ id: card.crypto?.id,
                      name: card.crypto?.name,
                      price: card.crypto?.current_price,
                      atl: card.crypto?.atl,
                      atlp: card.crypto?.atl_change_percentage,
                      atld: card.crypto?.atl_date ? new Date(card.crypto.atl_date) : card.crypto?.atl_date,
                  }))}
                // TODO: Fix sticky header for v7 of DataGrid
                sx={(theme) => ({
                  [`.${gridClasses.main}`]: {
                    overflow: "unset"
                  },
                  [`.${gridClasses["container--top"]}`]: {
                    // position: "sticky",
                    // top: 0,
                    backgroundColor: theme.palette.background.paper,
                    zIndex: -1
                  }
                })}
                initialState={{ columns: { columnVisibilityModel: { id: false }}}}
                pagination
                />
    </Box>
  </Stack>;
}

export default CryptoTable;
