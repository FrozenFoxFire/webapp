import React from 'react';
import { Button } from "@mui/material";

interface Props {
  onClick: () => void;
  title: string;
}

function HeaderButton({ onClick, title }: Props) {
  return <Button id={`header-button-${title}`} sx={{ px: '1rem' }} onClick={onClick}>{title}</Button>
}
export default HeaderButton;
