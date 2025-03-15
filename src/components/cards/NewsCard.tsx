import React from 'react';
import Card from '../models/Card';
import { Box, Grid2, Stack, Typography } from '@mui/material';

interface Props {
  card: Card;
}

function NewsCard({ card }: Props): JSX.Element {
  return (
    <Grid2 container className="newscard-item" size={{ xs: 4 }} height="25rem" alignContent="start" padding="0.25rem">
      <Stack overflow="auto" width="100%">
        <Box width="100%">
          <Typography className="newscard-title">{card.news?.title ?? 'Unknown Title'}</Typography>
        </Box>
        {card.news?.urlToImage && (
          <Box width="100%" height="5rem">
            <Box component="img" src={card.news.urlToImage} sx={{ height: '5rem', width: '5rem' }} />
          </Box>
        )}
        <Box width="100%">
          <Typography className="newscard-author">Author: {card.news?.author ?? 'Unknown'}</Typography>
        </Box>
        {card.news?.description && (
          <Box width="90%" textAlign="center">
            <Typography className="newscard-description">{card.news.description}</Typography>
          </Box>
        )}
      </Stack>
    </Grid2>
  );
}
export default NewsCard;
