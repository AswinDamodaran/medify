import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import MyBookingSearchBar from "../components/BookingSearchBar/BookingSearchBar";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import banner from '../images/banner.png'

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFiteredBookings] = useState([]);

  useEffect(() => {
    const localbookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localbookings));
  }, []);

  useEffect(() => {
    setFiteredBookings(bookings);
  }, [bookings]);

  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      >
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background:
              "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <Container maxWidth="xs">
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography
                position="absolute"
                left="200px"
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="6px 6px 35px 0px #1028511C"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
                <MyBookingSearchBar
                  list={bookings}
                  filterList={setFiteredBookings}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
        <Grid container >
            <Grid item xs={12} md={8} >
            <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(1005 - 384px" }}
              mr="24px"
            >
                {filteredBookings.length>0 && filteredBookings.map((hospital)=>(
                    <HospitalCard key={hospital["Hospital Name"]}
                    hospitals={hospital}
                    booking={true} />
                ))}
                {filteredBookings.length==0 && (
                    <Typography variant="h2" color="#1B3C74" >No Bookings</Typography>
                )}
            </Stack>
          </Stack>
        </Container>
            </Grid>
            <Grid item xs={12} md={4}>
            <Stack>
                <img
                
                  src={banner}
                  alt="advertisment"
                />
              </Stack>
            </Grid>
        </Grid>

      </Box>
    </div>
  );
}

export default MyBookings;
