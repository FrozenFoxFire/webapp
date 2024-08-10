import {Box, Stack, Typography} from '@mui/material';
import React from 'react';
import {DisplayComponentKeys, DisplayedComponents} from "../../../constants.tsx";
import HeaderCard from "../../../components/cards/HeaderCard";

interface Props {
  title: string;
  defaultSelection?: DisplayedComponents;
  selectionChanged?: (display: DisplayedComponents) => void;
}

function Header({ title, selectionChanged }: Props) {
  const updateSelection = (newSelection: DisplayedComponents) => {
    console.log('Update Selection: ', { newSelection });
    if (selectionChanged) {
      selectionChanged(newSelection);
    }
  }

  return (
    <Box id='app-header'>
      <Typography id="app-title">{title}</Typography>
      <Stack display="flex" flexDirection='row' justifyContent="center" >
        {DisplayComponentKeys.map((componentType, index) => {
          return <HeaderCard
            key={`header-${componentType}-${index}`}
            debug={true}
            skip={true}
            type={componentType}
            updateSelection={updateSelection} />
        })}
      </Stack>
    </Box>
  );
}
export default Header;
