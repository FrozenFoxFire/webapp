import React, {PropsWithChildren} from 'react';
import HeaderButton from "../button/HeaderButton.tsx";
import { DisplayedComponents } from "../../constants.tsx";
import { stringToDisplayComponent } from "../../utils/common.tsx";

interface Props extends PropsWithChildren {
  type: string;
  updateSelection: (type: DisplayedComponents) => void;
  debug?: boolean;
  skip?: boolean;
}

function HeaderCard({ type, updateSelection, debug = false, skip = false }: Props) {
  const capitalCase = type.toString().charAt(0).toUpperCase() + type.toString().slice(1);
  const displayType = stringToDisplayComponent(type);
  if (debug) {
    console.log('HeaderCard: ', { type, updateSelection, skip, capitalCase, displayType });
  }

  return <HeaderButton title={capitalCase} onClick={() => updateSelection(displayType)} />;
}
export default HeaderCard;
