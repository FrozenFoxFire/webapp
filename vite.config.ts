import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.NEWS_API_KEY': JSON.stringify(env.NEWS_API_KEY),
      'process.env.NEWS_API_HOST': JSON.stringify(env.NEWS_API_HOST),
      'process.env.NEWS_API_URL': JSON.stringify(env.NEWS_API_URL),
      'process.env.REACT_APP_TITLE': JSON.stringify(env.REACT_APP_TITLE),
      'process.env.CRYPTO_API_URL': JSON.stringify(env.CRYPTO_API_URL),
      'process.env.REACT_APP_GRAPHQL_API_PORT': JSON.stringify(env.REACT_APP_GRAPHQL_API_PORT),
    },
    plugins: [react()]
  };
});
