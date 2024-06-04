import React from 'react';
import {DisplayedComponents} from "../../utils/common.tsx";
import {Button} from "@mui/material";

interface Props {
  onClick: (selection: DisplayedComponents) => void;
  title: string;
}

function HeaderButton({ onClick, title }: Props) {
  return <Button id={`header-button-${title}`} sx={{ px: '1rem' }} onClick={() => onClick(DisplayedComponents.news)}>{title}</Button>
}
export default HeaderButton;
