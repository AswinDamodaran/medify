import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Questions from "../components/Questions/Questions";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./SearchPage.module.css";
import icon from "../images/tickIcon.svg";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import banner from "../images/banner.png";
import BookingModal from "../components/BookingModal/BookingModal";

function SearchPage() {
  const { enqueueSnackbar } = useSnackbar();

  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));

  const [Hospitals, setHospitals] = useState([]);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  useEffect(() => {
    const fetchDetails = async () => {
      setHospitals([]);
      setLoading(true);
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(res.data);
        setLoading(false);
      } catch (err) {
        enqueueSnackbar("coud not get the the details", { variant: "error" });
        setLoading(false);
      }
    };
    if (state && city) {
      fetchDetails();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModelOpen(true);
  };

  return (
    <div className={styles.searchWrapper}>
      
      <Box minHeight={300} width="100%">
        <Box className={styles.blueBackground}>
          <Container maxWidth="lg" className={styles.searchContainer}>
            <SearchBar />
          </Container>
        </Box>
      </Box>
      <Container maxWidth="xl" sx={{}}>
        {Hospitals.length > 0 && (
          <Box marginLeft="10%">
            <Typography
              component="h1"
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500}
              textAlign="start"
            >
              {`${Hospitals.length} medical centers available in `}
              <span style={{ textTransform: "capitalize" }}>
                {city.toLocaleLowerCase()}
              </span>
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={icon} alt="icon" />
              <Typography component="h2" sx={{ color: "#787887" }}>
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>
        )}
        <Stack alignItems="flex-start" direction={{ md: "row" }}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                {Hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitals={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}
                {loading && (
                  <Typography
                    variant="h3"
                    color="#1B3C74"
                    bgcolor="#fff"
                    p={3}
                    borderRadius={2}
                  >
                    Loading...
                  </Typography>
                )}
                {!state && (
                  <Typography
                    variant="h3"
                    color="#1B3C74"
                    bgcolor="#fff"
                    p={3}
                    borderRadius={2}
                  >
                    Please select a state and city 
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack>
                <img
                  className={styles.banner}
                  src={banner}
                  alt="advertisment"
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <BookingModal
      open={isModelOpen}
      setOpen={setIsModelOpen}
      bookingDetails={bookingDetails}
      showSuccessMessage={setShowSuccess}
      />
      <Questions />
    </div>
  );
}

export default SearchPage;
