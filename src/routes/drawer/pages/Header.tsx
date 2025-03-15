import React from 'react';
import { Grid2, Stack, Typography } from '@mui/material';
import { DisplayComponentNames, DisplayedComponents } from '../../../constants';
import HeaderCard from '../../../components/cards/HeaderCard';

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
  };

  return (
    <Grid2 id="app-header" border="solid 0.125rem cyan">
      <Typography id="app-title">{title}</Typography>
      <Stack display="flex" flexDirection="row" justifyContent="center">
        {DisplayComponentNames.map((componentType, index) => {
          return (
            <HeaderCard
              key={`header-${componentType}-${index}`}
              debug={true}
              skip={true}
              type={componentType.type}
              title={componentType.title}
              updateSelection={updateSelection}
            />
          );
        })}
      </Stack>
    </Grid2>
  );
}
export default Header;
