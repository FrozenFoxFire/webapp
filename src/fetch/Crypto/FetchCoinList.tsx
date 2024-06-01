import axios from 'axios';
import CryptoCoinResult from "../../components/models/CryptoCoinResult.tsx";

interface Props {
  url: string;
  currency: string;
  debug?: boolean;
}

const fetchCoinList = async ({ currency, url, debug = false }: Props): Promise<CryptoCoinResult[]> => {
  return axios
  .get(`${url}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    { headers: { 'Access-Control-Allow-Origin': 'origin' }})
  .then((response) => {
    if (debug) {
      console.log('fetch coin list successful', {response});
    }
    return response.data;
  })
  .catch((error) => {
    if (debug) {
      console.log('fetch coin list failed', {error});
    }
    return { status: 'error', message: 'Something went wrong' };
  });
};
export default fetchCoinList;
