import React from 'react';
import Card from '../models/Card';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import CardTextSmall from './CardTextSmall.tsx';

interface Props {
  card: Card;
}

function CryptoCard({ card }: Props): JSX.Element {
  return (
    <Grid2 container size={{ xs: 4 }} className="cryptocard-item">
      <Stack overflow="auto" width="100%">
        <Box width="100%" height="3rem" fontSize="0.7rem" textAlign="center">
          <Typography fontSize="0.1rem" className="newscard-title">
            {card.crypto?.name ?? 'Title Missing'}
          </Typography>
        </Box>
        <Box width="100%" textAlign="start">
          <CardTextSmall text={'ATH'} value={card.crypto?.ath} />
          <CardTextSmall text={'ATH %'} value={card.crypto?.ath_change_percentage} />
        </Box>
        <Box width="100%" textAlign="start">
          <CardTextSmall text={'ATL'} value={card.crypto?.atl} />
          <CardTextSmall text={'ATL %'} value={card.crypto?.atl_change_percentage} />
        </Box>
        <Box width="100%" textAlign="start">
          <CardTextSmall text={'Circulating'} value={card.crypto?.circulating_supply} />
          <CardTextSmall text={'Price'} value={card.crypto?.current_price} />
          <CardTextSmall text={'Valuation'} value={card.crypto?.fully_diluted_valuation} />
        </Box>
      </Stack>
    </Grid2>
  );
}
export default CryptoCard;
