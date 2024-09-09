import React, { SyntheticEvent, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface Props {
  debug?: boolean;
  defaultText?: string;
  onSubmit?: () => void;
  options?: string[];
  searchTermChanged?: (term: string) => void;
}

function SelectionSearchText({ debug, defaultText = 'Search', onSubmit, searchTermChanged, options = [] }: Props) {
  const [searchText, setSearchText] = useState('');
  if (debug) {
    console.log('SearchBar', { defaultText, searchTermChanged, options });
  }

  const searchTextChanged = (_event: SyntheticEvent<Element, Event>, value: string) => {
    setSearchText(value);
    searchTermChanged && searchTermChanged(value);

    // Question: Should we add submit button?
    if (!!onSubmit && _event.nativeEvent.type === 'Enter') {
      onSubmit();
    }
  }

  return <Autocomplete
    value={searchText}
    onChange={(_event, value) => searchTextChanged(_event, value ?? '')}
    options={options}
    renderInput={(params) => <TextField {...params} label={defaultText} />}
    sx={{ padding: '1rem' }}
  />
}
export default SelectionSearchText;
