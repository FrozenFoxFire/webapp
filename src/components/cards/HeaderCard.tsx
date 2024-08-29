import React, {PropsWithChildren} from 'react';
import HeaderButton from '../button/HeaderButton';
import { DisplayedComponents } from '../../constants';

interface Props extends PropsWithChildren {
  title: string;
  type: DisplayedComponents;
  updateSelection: (type: DisplayedComponents) => void;
  debug?: boolean;
  skip?: boolean;
}

function HeaderCard({ title, type, updateSelection, debug = false, skip = false }: Props) {
  if (debug) {
    console.log('HeaderCard: ', { title, updateSelection, skip });
  }

  return <HeaderButton title={title} onClick={() => updateSelection(type)} />;
}
export default HeaderCard;
