import React, { SyntheticEvent, useState } from 'react';
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
  const [previousSearches, setPreviousSearches] = useState(options);
  if (debug) {
    console.log('SearchBar', { defaultText, searchTermChanged, options });
  }

  const searchTextChanged = (_event: SyntheticEvent<Element, Event>, value: string) => {
    setSearchText(value);
    searchTermChanged && searchTermChanged(value);
    console.log('searchTextChanged', { value, _event });
    // Wire-up to temporary list when we hit enter
  };

  return (
    <Autocomplete
      value={searchText}
      onInputChange={(_event, value) => searchTextChanged(_event, value ?? '')}
      options={options}
      renderInput={(params) => <TextField {...params} label={defaultText} />}
      sx={{ padding: '1rem' }}
    />
  );
}
export default SelectionSearchText;
