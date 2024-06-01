import { Box, Typography } from '@mui/material';
import React from 'react';
import {DisplayedComponents} from "../../utils/common.tsx";

interface Props {
  title: string;
  selectionChanged?: (display: DisplayedComponents) => void;
}

function Header({ title, selectionChanged }: Props) {
  const updateSelection = (newSelection: DisplayedComponents) => {
    if (selectionChanged) {
      selectionChanged(newSelection);
    }
  }

  return (
    <Box id="app-header" textAlign="center" alignContent="start" minHeight="5rem">
      <Typography id="app-title">{title}</Typography>
      <Box onClick={() => updateSelection(DisplayedComponents.news)}>News</Box>
      <Box onClick={() => updateSelection(DisplayedComponents.crypto)}>Crypto</Box>
    </Box>
  );
}
export default Header;
