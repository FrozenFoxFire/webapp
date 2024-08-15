import axios from 'axios';
import FetchJobResult from '../../components/models/fetchResults/FetchJobResult.tsx';

interface Props {
  accessToken: string;
  debug?: boolean;
}

const fetchJobs = async ({ accessToken, debug = false }: Props): Promise<FetchJobResult> => {
  return axios
  .get(`https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))}`,
    { headers: { 'Authorization': `Bearer ${accessToken}` }})
  .then((response) => {
    if (debug) {
      console.log('fetch job list successful', { response });
    }
    return { response: JSON.parse(response.data.text) };
  })
  .catch((error) => {
    if (debug) {
      console.log('fetch job list failed', { error });
    }
    return { status: 'error', message: 'Something went wrong' };
  });
};

export default fetchJobs;
