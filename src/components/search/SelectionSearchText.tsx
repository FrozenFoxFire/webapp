import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface Props {
  debug?: boolean;
  defaultText?: string;
  onSubmit?: () => void;
  options?: string[];
  searchTermChanged?: (term: string) => void;
}

function SelectionSearchText({ debug, defaultText = 'Search', searchTermChanged, options = [] }: Props) {
  const [searchText, setSearchText] = useState('');
  if (debug) {
    console.log('SearchBar', { defaultText, searchTermChanged, options });
  }

  const searchTextChanged = (value: string) => {
    setSearchText(value);
    searchTermChanged && searchTermChanged(value);

    // If enter / return is hit, submit
  }

  return <Autocomplete
    value={searchText}
    onChange={(_event, value) => searchTextChanged(value ?? '')}
    options={options}
    renderInput={(params) => <TextField {...params} label={defaultText} />}
    sx={{ padding: '1rem' }}
  />
}
export default SelectionSearchText;
