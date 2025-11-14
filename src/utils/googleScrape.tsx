
const searchGoogleForTermURL = (term: string) => {
  return `https://www.google.com/search?q=${term}&gl=us&hl=en`;
}

const searchGoogleForFinanceURL = () => {
  return "https://www.google.com/finance/markets/indexes";
}

export { searchGoogleForFinanceURL, searchGoogleForTermURL };
