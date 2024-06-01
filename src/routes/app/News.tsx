import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Stack, Typography} from '@mui/material';
import Card from '../../components/models/Card.tsx';
import NewsCards from '../../components/partition/NewsCards.tsx';
import fetchNews from '../../fetch/FetchNews.tsx';
import NewsResult from '../../components/models/NewsResult.tsx';
import NewsArticle from '../../components/models/NewsArticle.tsx';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import SelectionSearchText from "../../components/Search/SelectionSearchText.tsx";

const convertArticleToCard = (article: NewsArticle, index: number): Card => {
  return {
    title: article.title ?? '',
    name: article.source?.name ?? '',
    description: article.description ?? '',
    image: article.urlToImage ?? '',
    author: article.author ?? '',
    id: article.source?.id ?? index.toString()
  };
};

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function News({ debug = false, skip = false }: Props) {
  const [articles, setArticles] = useState<NewsResult>({
    status: 'preload',
    code: 'notCalled',
    message: 'The news articles have not been loaded.'
  });
  const [paginationSize] = useState<number>(12);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const maxPageNumber = Math.ceil((articles?.articles?.length || 0) / paginationSize);
  const selectedArticles = (articles?.articles || [])
      .slice(paginationNumber * paginationSize, (paginationNumber + 1) * paginationSize)
      .map((article, index) => convertArticleToCard(article, index));

  const API_URL = process?.env?.NEWS_API_URL;
  if (debug) {
    console.log('News.tsx', { API_URL, paginationSize, paginationNumber, maxPageNumber, selectedArticles });
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

  useEffect(() => {
    if (!skip && !!API_URL) {
      fetchNews({ from: '04/30/24', url: API_URL, sortBy: 'publishedAt', term: 'Trump' }).then((fetchNewsResult) => {
        setArticles(fetchNewsResult);

        if (debug) {
          console.log({ fetchNewsResult });
        }
      });
    }
  }, [debug, skip]);

  return (
    <Stack id="app-news-content" textAlign="center" alignContent="center">
      <Grid id='app-news-content-container' className='grid-item-no-padding carousel-container'
            container item xs={12} textAlign='center' direction='column' spacing={5}>
        <Grid id='app-news-filters-container' className='filter-bar' item xs={12}>
          <Typography>Your News here!</Typography>
          <SelectionSearchText debug={debug} title='Search the News' topics={[]} />
        </Grid>
        <Grid id="app-news-carousel-controller" container item direction="row" spacing={2}>
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
          <NewsCards
            cards={selectedArticles}
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
export default News;
