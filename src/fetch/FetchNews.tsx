import axios from "axios";
import NewsResult from "../components/models/NewsResult.tsx";

interface Props {
  url: string;
  term: string;
  from: string;
  sortBy: string;
}

const API_KEY = process?.env?.NEWS_API_KEY;

const fetchNews = async ({ from, sortBy, term, url }: Props): Promise<NewsResult> => {
    return axios.get(`${url}?q=${term}&from=${from}&sortBy=${sortBy}&apiKey=${API_KEY}`)
    .then((response) => {
      console.log({ response });
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return { status: 'error', message: 'Something went wrong' };
    });
}

export default fetchNews;
