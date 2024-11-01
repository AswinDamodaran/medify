import { Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function TimePicker({ availableSlots, selected, hospitals, handleBooking }) {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      
      variant="outlined"
      sx={{
        borderRadius: "3px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
        color:"#2AA7FF",
      }}
      onClick={props.handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...hospitals, bookingDate: selected, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 4 }}
      
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
          
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            color="#414146"
          >
            Morning
          </Typography>
          {availableSlots.morning.map((slots)=>(
            <CustomChip key={slots}
            label={slots}
            handleClick={()=> handleClick(slots)} />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            color="#414146"
          >
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((slots)=>(
            <CustomChip key={slots}
            label={slots}
            handleClick={()=> handleClick(slots)} />
          ))}
        </Stack>
      )}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            color="#414146"
          >
            Evening
          </Typography>
          {availableSlots.evening.map((slots)=>(
            <CustomChip key={slots}
            label={slots}
            handleClick={()=> handleClick(slots)} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default TimePicker;
