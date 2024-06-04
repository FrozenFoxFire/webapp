import {Box, Button, Stack, Typography} from '@mui/material';
import React from 'react';
import {DisplayedComponents} from "../../../utils/common.tsx";
import HeaderButton from "../../../components/button/HeaderButton.tsx";

interface Props {
  title: string;
  defaultSelection?: DisplayedComponents;
  selectionChanged?: (display: DisplayedComponents) => void;
}

function Header({ title, selectionChanged }: Props) {
  const updateSelection = (newSelection: DisplayedComponents) => {
    if (selectionChanged) {
      selectionChanged(newSelection);
    }
  }

  return (
    <Box id="app-header" textAlign="center" alignContent="start" minHeight="5rem" flexDirection='column'>
      <Typography id="app-title">{title}</Typography>
      <Stack display="flex" flexDirection='row' justifyContent="center" >
        <HeaderButton title='News' onClick={() => updateSelection(DisplayedComponents.news)} />
        <HeaderButton title='Crypto' onClick={() => updateSelection(DisplayedComponents.crypto)} />
      </Stack>
    </Box>
  );
}
export default Header;
