import axios from 'axios';

interface Props {
  url: string;
  id: string;
  debug?: boolean;
}

const fetchCoin = async ({ id, url, debug = false }: Props): Promise<unknown> => {
  return axios
  .get(`${url}/${id}`)
  .then((response) => {
    if (debug) {
      console.log({response});
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
export default fetchCoin;
