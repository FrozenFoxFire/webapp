import React, {useEffect, useState} from 'react';
import Card from '../../../components/models/Card.tsx';
import fetchNews from '../../../fetch/FetchNews.tsx';
import NewsArticle from '../../../components/models/NewsArticle.tsx';
import CardCarousel from "../../../components/cards/CardCarousel.tsx";
import {DisplayedComponents} from "../../../constants.tsx";

const convertArticleToCard = (article: NewsArticle, index: number): Card => {
  return {
    id: article.source?.id ?? index.toString(),
    news: article
  };
};

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function News({ debug = false, skip = false }: Props) {
  const [articles, setArticles] = useState<Card[]>([]);
  const API_URL = process?.env?.NEWS_API_URL;

  if (debug) {
    console.log('News.tsx', { API_URL, articles });
  }

  useEffect(() => {
    if (!skip && !!API_URL) {
      fetchNews({ from: '04/31/24', url: API_URL, sortBy: 'publishedAt', term: 'Trump' }).then((fetchNewsResult) => {
          setArticles(fetchNewsResult.map((article, index) => convertArticleToCard(article, index)));

        if (debug) {
          console.log({ fetchNewsResult });
        }
      });
    }
  }, [debug, skip]);

  return (<CardCarousel cardType={DisplayedComponents.news} cards={articles} debug={debug} />);
}
export default News;
