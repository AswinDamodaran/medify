import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function BookingSearchBar({ list, filterList }) {
  const [textInput, setTextInput] = useState("");

  const filteredList = useMemo(() => {
    if (!textInput.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(textInput.trim().toLowerCase())
    );
  }, [textInput, list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={3}  >
        <TextField
          type="text"
          label="Search by Hospital"
          variant="outlined"
          fullWidth
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          sx={{width:"600px"}}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{py:"15px",px:8,flexShrink:0}}
          disableElevation
        >Search</Button>
      </Stack>
    </form>
  );
}

export default BookingSearchBar;
