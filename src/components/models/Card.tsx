import CryptoCoin from '../models/CryptoCoinResult';
import NewsArticle from '../models/NewsArticle';

interface Card {
  id: string;
  crypto?: CryptoCoin;
  news?: NewsArticle;
}
export default Card;
