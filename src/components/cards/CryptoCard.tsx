import React from 'react';
import { Card } from '../models';
import {Box, Grid, Stack, Typography} from '@mui/material';

interface Props {
  card: Card;
}

function CryptoCard({ card }: Props): JSX.Element {
  return (
    <Grid
      container
      item
      xs={2}
      className='cryptocard-item'
    >
      <Stack overflow='auto' width='100%'>
        <Box width='100%' height='3rem' fontSize='0.7rem'>
          <Typography fontSize='0.1rem' className='newscard-title'>{card.crypto?.name ?? 'Title Missing'}</Typography>
        </Box>
        <Box width='100%' height='3rem'>
          <Typography fontSize='0.1rem' className='newscard-description'>{`ATH: ${card.crypto?.ath}`}</Typography>
          <Typography fontSize='0.1rem' className='newscard-description'>{`ATH %: ${card.crypto?.ath_change_percentage}`}</Typography>
        </Box>
        <Box width='100%' height='3rem'>
          <Typography fontSize='0.1rem' className='newscard-description'>{`ATL: ${card.crypto?.atl}`}</Typography>
          <Typography fontSize='0.1rem' className='newscard-description'>{`ATL %: ${card.crypto?.atl_change_percentage}`}</Typography>
        </Box>
        <Box width='100%' height='3rem'>
          <Typography fontSize='0.1rem' className='newscard-description'>{`Circulating: ${card.crypto?.circulating_supply}`}</Typography>
          <Typography fontSize='0.1rem' className='newscard-description'>{`Price: $${card.crypto?.current_price}`}</Typography>
          <Typography fontSize='0.1rem' className='newscard-description'>{`Valuation: ${card.crypto?.fully_diluted_valuation}`}</Typography>
        </Box>
      </Stack>
    </Grid>
  );
}
export default CryptoCard;
