import {isNumeric} from "./utils/common.tsx";

export enum DisplayedComponents {
  none,
  aboutTheAuthor,
  crypto,
  news,
  security,
  stocks
}
export const DisplayComponentKeys = Object.keys(DisplayedComponents)
  .filter(value => !isNumeric(value))
  .filter(value => value !== 'none');

console.log('Constants: ', { DisplayedComponents, DisplayComponentKeys, pureKeys: Object.keys(DisplayedComponents) })
