import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export default function SearchBar() {
  const [inputFocused, setInputFocused] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];


  const handleFocus = () => {
    setInputFocused(!inputFocused);
  };


  return (
    <Autocomplete
      // disablePortal
      options={options}
      freeSolo
      type="text"
      // fullWidth
      size="small"
      style={{
        // outlineOffset: "0px",
        marginTop:'10px',
        outline: "none",
        width:'40%',
        borderRadius: inputFocused ? "0rem" : "1.2rem",
        backgroundColor: "white",
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search Reddit"
          color="primary"
            InputProps={{
              style: {
                borderTopLeftRadius: "1.2rem",
                borderTopRightRadius: "1.2rem",
                borderBottomLeftRadius: inputFocused ? "0rem" : "1.2rem",
                borderBottomRightRadius: inputFocused ? "0rem" : "1.2rem",
                backgroundColor: !inputFocused ? "var(--secondary-color)" : "white",
                margin:'0',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton size="small">
                    <SearchIcon fontSize="large"/>
                  </IconButton>
                </InputAdornment>
              ),
              onFocus: handleFocus,
              onBlur: handleFocus,
          }}
        />
      )}
    />
  );
}
