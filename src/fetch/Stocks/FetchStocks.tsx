import axios from 'axios';
import {searchGoogleForFinanceURL} from "../../utils/googleScrape.tsx";

// Partially taken from: https://medium.com/@mikhail.a.zub/web-scraping-google-finance-main-page-with-nodejs-b7ec050c11ef
const AXIOS_OPTIONS = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
  }, // adding the User-Agent header as one way to prevent the request from being blocked
  params: {
    hl: "en", // parameter defines the language to use for the Google search
  },
};

interface Props {
  url: string;
  id: string;
  debug?: boolean;
}

const fetchStocks = async ({ debug = false }: Props): Promise<unknown> => {
  return axios
  .get(searchGoogleForFinanceURL(), AXIOS_OPTIONS)
  .then((response) => {
    if (debug) {
      console.log({ response });
    }
    return response.data;
  })
  .catch((error) => {
    if (debug) {
      console.log(error);
    }
    return { status: 'error', message: 'Something went wrong' };
  });
};
export default fetchStocks;
