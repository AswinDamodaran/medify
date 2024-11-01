import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { format } from "date-fns";
import { useSnackbar } from "notistack";

function BookingModal({ open, setOpen, bookingDetails, showSuccessMessage }) {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();
    const bookings = localStorage.getItem("bookings") || "[]";

    const oldBookings = JSON.parse(bookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    showSuccessMessage(true);
    setEmail("");
    enqueueSnackbar("Booking is successfull",{variant:"success"})
    setOpen(false);
  };

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];

    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "first_visit",
        eventDate: new Date().toISOString(),
      });
    }
    triggerFirstVisitEvent();
  };

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,

          bgcolor: "#fff",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        <Typography variant="h4" color="#1B3C74">
          Confirm booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
                sx={{ backgroundColor: "#2AA8FF", borderRadius: "15px" }}
              >
                Confirm
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                size="large"
                disableElevation
                sx={{ borderRadius: "15px" }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default BookingModal;
