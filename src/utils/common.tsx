import {DisplayedComponents} from "../constants.tsx";

type StringToDisplayComponentResult = DisplayedComponents;
export const stringToDisplayComponent = (convertingStr: string): StringToDisplayComponentResult => {
  if (Object.keys(DisplayedComponents).includes(convertingStr)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return DisplayedComponents[convertingStr];
  } else {
    return DisplayedComponents.none;
  }
}

export const isNumeric = (value: string): boolean => {
  return /^-?\d+$/.test(value);
}
