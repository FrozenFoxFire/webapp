import {useEffect, useState} from "react";
import fetchCoinList from "../../fetch/Crypto/FetchCoinList.tsx";
import CryptoCoinResult from "../../components/models/CryptoCoinResult.tsx";

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function Crypto({ debug, skip }: Props) {
  const [coinList, setCoinList] = useState<CryptoCoinResult[]>([]);
  const API_URL = process?.env?.CRYPTO_API_URL;

  if (debug) {
    console.log('Crypto', { coinList, API_URL });
  }

  useEffect(() => {
    if (!skip && !!API_URL) {
      fetchCoinList({ currency: 'USD', url: API_URL, debug: debug }).then((fetchCoinListResult) => {
        setCoinList(fetchCoinListResult);
      });
    }
  }, [debug, skip]);

  return <>Crypto</>
}
export default Crypto;
