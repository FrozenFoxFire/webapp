import React, { useEffect, useState } from 'react';
import fetchCoinList from '../../../fetch/Crypto/FetchCoinList.tsx';
import CryptoCoinResult from '../../../components/models/fetchResults/CryptoCoinResult.tsx';
import Card from '../../../components/models/Card';
import CryptoTable from '../../../components/Tables/CryptoTable.tsx';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function Crypto({ debug, skip }: Props) {
  const [coinList, setCoinList] = useState<Card[]>([]);
  const API_URL = process?.env?.CRYPTO_API_URL;

  const convertToCard = (result: CryptoCoinResult): Card => {
    return { id: result?.id || 'unknown id', crypto: result };
  }

  if (debug) {
    console.log('Crypto', { coinList, API_URL });
  }

  // Determine logic to extrapolate out of useEffect
  useEffect(() => {
    if (!skip && !!API_URL) {
      fetchCoinList({ currency: 'USD', url: API_URL, debug: debug }).then((fetchCoinListResult) => {
        setCoinList(fetchCoinListResult.map(coin => convertToCard(coin)));
      });
    }
  }, [debug, skip]);

  return <CryptoTable cards={coinList} debug={debug} />;
}
export default Crypto;
