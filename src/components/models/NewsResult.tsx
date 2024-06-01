import NewsArticle from './NewsArticle.tsx';

interface NewsResult {
  status: string;

  // OK Results
  totalResults?: number;
  articles?: NewsArticle[];

  // Error
  code?: string;
  message?: string;
}
export default NewsResult;
