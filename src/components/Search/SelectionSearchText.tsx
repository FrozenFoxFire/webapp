import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";

interface Props {
  debug?: boolean;
  title?: string;
  topics?: string[];
}

function SelectionSearchText({ debug, title = 'Search Terms', topics = [] }: Props) {
  const [searchText, setSearchText] = useState('');
  if (debug) {
    console.log('SearchBar', {});
  }

  return <Autocomplete
    value={searchText}
    onChange={(_event, value) => setSearchText(value ?? '')}
    options={topics}
    renderInput={(params) => <TextField {...params} label={title} />}
  />
}
export default SelectionSearchText;
