import React, {useEffect, useState} from "react";
import fetchCoinList from "../../fetch/Crypto/FetchCoinList.tsx";
import CryptoCoinResult from "../../components/models/CryptoCoinResult.tsx";
import CardCarousel from "./CardCarousel.tsx";
import {DisplayedComponents} from "../../utils/common.tsx";
import {Card} from "../../components/models";

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function Crypto({ debug, skip }: Props) {
  const [coinList, setCoinList] = useState<Card[]>([]);
  const API_URL = process?.env?.CRYPTO_API_URL;

  const convertToCard = (result: CryptoCoinResult): Card => {
    return { id: result?.id || 'unknown id', title: result?.name || 'Name not Found', description: 'Combine results for description', image: result?.image || '', };
  }

  if (debug) {
    console.log('Crypto', { coinList, API_URL });
  }

  useEffect(() => {
    if (!skip && !!API_URL) {
      fetchCoinList({ currency: 'USD', url: API_URL, debug: debug }).then((fetchCoinListResult) => {
        setCoinList(fetchCoinListResult.map(coin => convertToCard(coin)));
      });
    }
  }, [debug, skip]);

  return <CardCarousel cardType={DisplayedComponents.crypto} cards={coinList} debug={debug} />
}
export default Crypto;
