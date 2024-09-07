export enum DisplayedComponents {
  none,
  aboutTheAuthor,
  crypto,
  news,
  security,
  stocks,
  videos
}

export const DisplayComponentNames = [
  { type: DisplayedComponents.aboutTheAuthor, title: 'About the Author'},
  { type: DisplayedComponents.videos, title: 'Video Search' },
  { type: DisplayedComponents.crypto, title: 'Crypto'},
  { type: DisplayedComponents.news, title: 'Related News'},
  { type: DisplayedComponents.security, title: 'Security'},
  { type: DisplayedComponents.stocks, title: 'Stocks'},
]

console.log('Constants: ', { DisplayedComponents, DisplayComponentNames, pureKeys: Object.keys(DisplayedComponents) })
