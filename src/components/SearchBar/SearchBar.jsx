import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  TextField,
  InputAdornment,
  Grid,
  Select,
  Box,
  MenuItem,
} from "@mui/material";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function SearchBar() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.state && form.city) {
      navigate(`/search?state=${form.state}&city=${form.city}`);
    }
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setState(res.data);
      } catch (err) {
        enqueueSnackbar("could not fetch the states", { variant: "error" });
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setForm((prev) => ({ ...prev, city: "" }));
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${form.state}`
        );
        setCities(res.data);
      } catch (err) {
        enqueueSnackbar("could not fetch the Cities", { variant: "error" });
      }
    };
    if (form.state !== "") {
      fetchCities();
    }
  }, [form.state]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        gap: 4,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={form.state}
        required
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        }
        sx={{
          minWidth: 200,
          color: "#ABB6C7",
          width: "100%",
          textAlign: "start",
          border: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem disabled value="">
          State
        </MenuItem>
        {state.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      <Select
        displayEmpty
        id="city"
        name="city"
        value={form.city}
        required
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        }
        sx={{
          minWidth: 200,
          color: "#ABB6C7",
          width: "100%",
          textAlign: "start",
          border: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
      <Button
        sx={{ minWidth: 200, backgroundColor: "#2AA8FF" }}
        variant="contained"
        type="submit"
      >
        <SearchIcon />
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
