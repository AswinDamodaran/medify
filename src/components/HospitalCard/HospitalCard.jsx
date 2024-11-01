import React, { useEffect, useState } from "react";
import hospitalIcon from "../../images/hospitalicon.svg";
import { Stack, Box, Typography, Divider, Button, Chip } from "@mui/material";
import { Details } from "@mui/icons-material";
import { format } from "date-fns";
import Calendar from "../Calender/Calender";

import ThumbUpAltIcon from "../../images/thumbsup.svg";

function HospitalCard({
  handleBooking,
  availableSlots,
  hospitals,
  booking = false,
}) {
  const [showSlot, setShowSlot] = useState(false);

  return (
    <Box sx={{ borderRadius: "15px", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={hospitalIcon}
          width={{ xs: 64, md: 130 }}
          sx={{ alignSelf: "start", flexShrink: 0 }}
        />
        <Box flex={1} textAlign="start">
          <Typography
            component="h3"
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            lineHeight={1}
            sx={{
              color: "#14BEF0",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {hospitals["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              color: "#414146",
              textTransform: "capitalize",
            }}
          >
            {`${hospitals["City"].toLowerCase()},${hospitals["State"]}`}
          </Typography>
          <Typography sx={{ fontSize: 14, md: 1 }}>
            {hospitals["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              sx={{
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#02A401",
              }}
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography sx={{ color: "#414146" }}>
              Consultation fee at clinic
            </Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", md: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="#00A500"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component="img"
              src={ThumbUpAltIcon}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            ></Box>
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
            >
              {hospitals["Hospital overall rating"] === "Not Availabe"
                ? 0
                : hospitals["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="#00A500"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2AA7FF" }}
                disableElevation
                onClick={() => setShowSlot((prev) => !prev)}
              >
                {!showSlot ? "Book FREE Center Visit" : "Hide Booking Calender"}
              </Button>
            </>
          )}
          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={hospitals.bookingTime}
                variant="outlined"
                
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                  color:"#2AA7FF"
                }}
              />
              <Chip
                variant="outlined"
                color="#01A400"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                  color:"#01A400"
                }}
                label={format(new Date(hospitals.bookingDate), "dd MMMM yyyy")}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
      {showSlot && (
        <Calendar
          hospitals={hospitals}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}

export default HospitalCard;
