import axios from 'axios';
import { NewsArticle } from '../components/models/NewsArticle';

interface Props {
  url: string;
  term: string;
  from: string;
  sortBy: string;
}

const API_KEY = process?.env?.NEWS_API_KEY;

const fetchNews = async ({ from, sortBy, term, url }: Props): Promise<NewsArticle[]> => {
  return axios
    .get(`${url}?q=${term}&from=${from}&sortBy=${sortBy}&apiKey=${API_KEY}`)
    .then((response) => {
      console.log({ response });
      return response.data?.articles ?? [];
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export default fetchNews;
